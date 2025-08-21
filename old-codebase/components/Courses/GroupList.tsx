import React, { CSSProperties, FormEvent, MouseEvent, useCallback, useContext, useEffect, useRef, useState } from "react"
import { Text, Toggle, Icon, IRectangle, List, TextField, Dropdown, IDropdownOption, mergeStyleSets, useTheme } from "@fluentui/react"
import { Container } from "react-bootstrap"
import { semibold } from "../../services/Fonts"
import { Degree, CourseDegree } from "../../models/Models"
import * as Scroll from "react-scroll"
import ErrorMessage from "../Atoms/ErrorMessage"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import GroupItem from "./GroupItem"
import LocalizationService from "../../services/LocalizationService"
import Message from "../Atoms/Message"
import Chip from "components/Atoms/Chip"
import GlobalContext from "services/GlobalContext"

interface Props {
  degree?: Degree
  courses: CourseDegree[]
  errorLoadingCourses: boolean
}

const semesterFilterOptions: IDropdownOption[] = [
  { key: 0, text: "Non selezionato" },
  { key: 1, text: "Primo" },
  { key: 2, text: "Secondo" },
]

const yearBachelorDegreeFilterOptions: IDropdownOption[] = [
  { key: 0, text: "Non selezionato" },
  { key: -1, text: "Gruppo principale" },
  { key: 1, text: "Primo" },
  { key: 2, text: "Secondo" },
  { key: 3, text: "Terzo" },
  { key: -2, text: "Complementare" },
]

const yearMasterDegreeFilterOptions: IDropdownOption[] = [
  { key: 0, text: "Non selezionato" },
  { key: 1, text: "Primo" },
  { key: 2, text: "Secondo" },
]

const CourseList = (props: Props) => {
  var theme = useTheme()
  const locale = LocalizationService.strings()
  var language: string | undefined = LocalizationService.getLanguage()

  const { isHeaderPinned } = useContext(GlobalContext)

  const [filtersToggle, setFiltersToggle] = useState<boolean>(false)

  const columnCount = useRef(0)
  const rowHeight = useRef(0)
  const rowsPerPage = useRef(0)
  const MAX_ROW_HEIGHT = 265

  const subHeader: CSSProperties = {
    backgroundColor: theme.palette.neutralLighter,
    borderTop: `1px solid ${theme.palette.neutralQuaternary}`,
    borderBottom: `1px solid ${theme.palette.neutralQuaternary}`,
    padding: "10px 0px",
    position: "sticky",
    top: isHeaderPinned ? 44 : 0,
    transition: "top 0.2s ease-in-out 0s",
    zIndex: 2,
  }

  var classNames = mergeStyleSets({
    listGrid: {
      overflow: "hidden",
      fontSize: 0,
      position: "relative",
      marginBottom: 10,
      margin: "1px",
    },
  })

  var Element = Scroll.Element
  var scroller = Scroll.scroller

  const scrollToGroupsFilters = () => {
    scroller.scrollTo("groups-filters", {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -100,
    })
  }

  const getItemCountForPage = useCallback((itemIndex?: number, surfaceRect?: IRectangle) => {
    if (itemIndex === 0) {
      columnCount.current = Math.ceil(surfaceRect!.width / MAX_ROW_HEIGHT)
      rowHeight.current = MAX_ROW_HEIGHT
      rowsPerPage.current = surfaceRect!.height / MAX_ROW_HEIGHT
    }
    return columnCount.current * rowsPerPage.current
  }, [])

  const getPageHeight = useCallback((): number => {
    return rowHeight.current * rowsPerPage.current
  }, [])

  const getCell = (e?: CourseDegree, index?: number, _isScrolling?: boolean) => {
    return (
      <div data-is-focusable className="listGridTile" style={{ height: rowHeight.current + "px", width: 100 / columnCount.current + "%" }}>
        <GroupItem key={index} data={e!} />
      </div>
    )
  }

  // Filters inizialization
  const [nameFilter, setNameFilter] = useState<string>("")
  const [yearFilter, setYearFilter] = useState<number>(0)
  const [semesterFilter, setSemesterFilter] = useState<number>(0)

  const onNameFilterChanged = (_event: FormEvent<HTMLInputElement | HTMLTextAreaElement>, text?: string): void => {
    setNameFilter(text ?? "")
  }

  const onSemesterFilterChanged = (_event: FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
    setSemesterFilter((item?.key ?? 0) as number)
  }

  const onYearFilterChanged = (_event: FormEvent<HTMLDivElement>, item?: IDropdownOption): void => {
    setYearFilter((item?.key ?? 0) as number)
  }

  // Filters handling
  let yearFilterOptions = props.degree?.type === "M" || props.degree?.type === "C" ? yearMasterDegreeFilterOptions : yearBachelorDegreeFilterOptions
  let filteredCourses = props.courses

  if (nameFilter !== "") {
    filteredCourses = filteredCourses.filter((x) => x.course.name.toLocaleLowerCase().includes(nameFilter.toLocaleLowerCase()))
  }
  if (semesterFilter !== 0) {
    filteredCourses = filteredCourses.filter((x) => x.semester === semesterFilter)
  }
  if (yearFilter !== 0) {
    filteredCourses = filteredCourses.filter((x) => x.year === yearFilter)
  }

  const toggleGroupsFilters = (_ev: MouseEvent<HTMLElement>, checked?: boolean) => {
    setFiltersToggle(checked!)
    resetGroupsFilters()
  }

  const resetGroupsFilters = () => {
    setNameFilter("")
    setSemesterFilter(0)
    setYearFilter(0)
  }

  useEffect(() => {
    resetGroupsFilters()
  }, [props.degree])

  useEffect(() => {
    if (filtersToggle) scrollToGroupsFilters()
  }, [filtersToggle])

  const buildGroupsNumberString = (n: number) => {
    if (n === 0) {
      switch (language!) {
        case "it":
          return "Nessun gruppo disponibile."
        case "en":
          return "No groups available."
      }
    } else {
      switch (language!) {
        case "it":
          return `${n === 1 ? "Gruppo disponibile" : "Gruppi disponibili"}`
        case "en":
          return `${n === 1 ? "Group available" : "Groups available"}`
      }
    }
  }

  return (
    <div className="groups-list mb-4" id="groups">
      <div className="pb-2 pt-2 mb-4" style={subHeader}>
        <Container className="d-flex justify-content-between align-items-center" style={{ gap: 8 }}>
          <div className="d-flex flex-row align-items-center" style={{ gap: 5 }}>
            <Text variant="medium" style={{ color: theme.palette.black }} styles={semibold}>
              {props.courses.length > 0 && (
                <Chip
                  label={props.courses.length.toString()}
                  textColor={theme.palette.white}
                  theme={theme}
                  bgColor={theme.palette.themePrimary}
                  size="small"
                  className="mr-1"
                />
              )}
              {buildGroupsNumberString(props.courses.length)}
            </Text>
          </div>

          <div className="filters-toggle d-flex align-items-center">
            <Toggle
              label={
                <Text variant="medium" styles={semibold}>
                  {locale?.courses.filtersToggle}
                </Text>
              }
              inlineLabel
              onText="On"
              offText="Off"
              onChange={toggleGroupsFilters}
              checked={filtersToggle}
              disabled={props.errorLoadingCourses}
            />
          </div>
        </Container>
      </div>

      <Container>
        {filtersToggle ? (
          /* @ts-ignore */
          <Element name="groups-filters">
            <div className="mb-4 text-center">
              <Row className="justify-content-center">
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                  <TextField
                    label={locale?.courses.nameFilter}
                    onChange={onNameFilterChanged}
                    disabled={props.courses.length === 0}
                    value={nameFilter}
                  />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Dropdown
                    onRenderCaretDown={() => <Icon iconName="IoChevronDown" />}
                    options={yearFilterOptions}
                    label={locale?.courses.yearFilter}
                    onChange={onYearFilterChanged}
                    selectedKey={yearFilter}
                    disabled={
                      props.courses.length === 0 || props.degree?.slug === "magistrale_informatica"
                    } /* To-do: must decide if we need an apposite field to disable year selection */
                  />
                </Col>
                <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                  <Dropdown
                    onRenderCaretDown={() => <Icon iconName="IoChevronDown" />}
                    options={semesterFilterOptions}
                    label={locale?.courses.semesterFilter}
                    onChange={onSemesterFilterChanged}
                    selectedKey={semesterFilter}
                    disabled={props.courses.length === 0}
                  />
                </Col>
              </Row>
            </div>
          </Element>
        ) : (
          <></>
        )}

        {props.errorLoadingCourses ? (
          <ErrorMessage error={props.errorLoadingCourses} />
        ) : filteredCourses.length === 0 ? (
          <div className="justify-content-center">
            <Message text={locale?.courses.groupsNotFound!} />
          </div>
        ) : (
          <div className="course-list">
            <List
              className={classNames.listGrid}
              items={filteredCourses}
              getItemCountForPage={getItemCountForPage}
              getPageHeight={getPageHeight}
              renderedWindowsAhead={15}
              onRenderCell={getCell}
              usePageCache={true}
            />
          </div>
        )}
      </Container>
    </div>
  )
}

export default CourseList
