import * as React from "react"
import { IAutocompleteProps, IAutocompleteState, ISuggestionItem } from "../Courses/Autocomplete_types"
import { SearchBox, Callout, List, Text, mergeStyleSets } from "@fluentui/react"
import { DirectionalHint, ISearchBoxStyles, IIconProps } from "@fluentui/react"
import { semibold } from "services/Fonts"
import Chip from "../Atoms/Chip"

const searchBoxStyles: Partial<ISearchBoxStyles> = { root: { maxWidth: 650, minWidth: 0 } }

const CalloutStyle = () => {
  return { maxWidth: "650px" }
}

const iconProps: IIconProps = { iconName: "GroupsSearch" }

const AutocompleteStyles = () => {
  return {
    maxWidth: "650px",
  }
}

const SuggestionListStyle = () => {
  return { padding: "6px 16px", fontSize: "14px", cursor: "default", display: "flex", gap: 5, alignItems: "center" }
}

const KeyCodes = {
  tab: 9 as 9,
  enter: 13 as 13,
  left: 37 as 37,
  up: 38 as 38,
  right: 39 as 39,
  down: 40 as 40,
}
type ISearchSuggestionsProps = IAutocompleteProps

export class Autocomplete extends React.Component<ISearchSuggestionsProps, IAutocompleteState> {
  private _menuButtonElement = React.createRef<HTMLDivElement>()

  constructor(props: ISearchSuggestionsProps) {
    super(props)
    this.state = {
      isSuggestionDisabled: false,
      searchText: "",
    }
  }

  private SuggestionListItemStyle = mergeStyleSets({
    root: {
      display: "flex",
      selectors: {
        "&:hover": {
          backgroundColor: this.props.theme.palette.neutralLighter,
        },
      },
    },
  })

  protected getComponentName(): string {
    return "SearchSuggestions"
  }

  handleClick = (item: ISuggestionItem) => {
    this.hideSuggestionCallOut()
    this.props.suggestionCallback(item)
    this.setState({ searchText: item.displayValue })
  }

  render() {
    return this.renderSearch()
  }

  private renderSearch = () => {
    return (
      <div ref={this._menuButtonElement} style={AutocompleteStyles()} onKeyDown={this.onKeyDown}>
        <SearchBox
          id={"SuggestionSearchBox"}
          styles={searchBoxStyles}
          underlined={true}
          placeholder={this.props.searchTitle}
          onSearch={(newValue) => this.onSearch(newValue)}
          onChange={(_, newSearchText) => {
            newSearchText?.trim() !== "" ? this.showSuggestionCallOut() : this.hideSuggestionCallOut()
            this.setState({ searchText: newSearchText! })
            this.onChange(newSearchText!)
          }}
          iconProps={iconProps}
          value={this.props.value}
          disabled={this.props.disabled}
        />
        {this.renderSuggestions()}
      </div>
    )
  }

  private onSearch(enteredEntityValue: string) {
    this.hideSuggestionCallOut()
    this.props.searchCallback(enteredEntityValue.trim())
  }

  private onChange(newSearchText: string) {
    this.props.changeCallback(newSearchText)
  }

  private renderSuggestions = () => {
    return (
      <Callout
        id="SuggestionContainer"
        ariaLabelledBy={"callout-suggestions"}
        gapSpace={2}
        coverTarget={false}
        alignTargetEdge={true}
        onDismiss={(_ev) => this.hideSuggestionCallOut()}
        hidden={!this.state.isSuggestionDisabled}
        calloutMaxHeight={300}
        style={CalloutStyle()}
        target={this._menuButtonElement.current}
        directionalHint={DirectionalHint.bottomLeftEdge}
        isBeakVisible={false}
      >
        {this.renderSuggestionList()}
      </Callout>
    )
  }

  private renderSuggestionList = () => {
    return <List id="SearchList" tabIndex={0} items={this.suggestedTagsFiltered(this.props.items)} onRenderCell={this.onRenderCell} />
  }

  private renderChip = (item: any) => {
    let label: string

    switch (item.degree.type) {
      case "B":
        label = this.props.language == "it" ? "triennale" : "bachelor's degree"
        break
      case "M":
        label = this.props.language == "it" ? "magistrale" : "master's degree"
        break
      case "C":
        label = this.props.language == "it" ? "magistrale a ciclo unico" : "single-cycle master's degree"
        break
      default:
        label = ""
    }

    let buildBgColor = (type: string) => {
      switch (type) {
        case "B":
          return this.props.theme.palette.themePrimary
        case "M":
          return this.props.theme.palette.themeDark
        case "C":
          return this.props.theme.palette.themeDarker
        default:
          return this.props.theme.palette.neutralLighter
      }
    }

    return (
      <Text variant="small" styles={semibold}>
        <Chip label={label} size="small" textColor={this.props.theme.palette.white} bgColor={buildBgColor(item.degree.type)} />
      </Text>
    )
  }

  private onRenderCell = (item: any) => {
    if (item.key !== -1) {
      return (
        <div
          key={item.key}
          className={this.SuggestionListItemStyle.root}
          data-is-focusable={true}
          onKeyDown={(ev: React.KeyboardEvent<HTMLElement>) => this.handleListItemKeyDown(ev, item)}
          onClick={() => this.handleClick(item)}
        >
          <div id={"link" + item.key} style={SuggestionListStyle()}>
            {item.displayValue} {this.renderChip(item)}
          </div>
        </div>
      )
    } else {
      return (
        <div key={item.key} data-is-focusable={true}>
          {item.displayValue}
        </div>
      )
    }
  }

  private showSuggestionCallOut() {
    this.setState({ isSuggestionDisabled: true })
  }

  private hideSuggestionCallOut() {
    this.setState({ isSuggestionDisabled: false })
  }

  private suggestedTagsFiltered = (list: ISuggestionItem[]) => {
    let suggestedTags = list.filter((tag) => tag.searchValue.toLowerCase().includes(this.state.searchText.toLowerCase()))
    suggestedTags = suggestedTags.sort((a, b) => a.searchValue.localeCompare(b.searchValue))
    if (suggestedTags.length === 0) {
      suggestedTags = [
        {
          degree: null,
          key: -1,
          displayValue: this.props.language == "it" ? "Nessun corso di laurea trovato." : "No degrees found.",
          searchValue: "",
        },
      ]
    }
    return suggestedTags
  }

  protected handleListItemKeyDown = (ev: React.KeyboardEvent<HTMLElement>, item: ISuggestionItem): void => {
    const keyCode = ev.which
    switch (keyCode) {
      case KeyCodes.enter:
        this.handleClick(item)
        break
    }
  }

  protected onKeyDown = (ev: React.KeyboardEvent<HTMLElement>): void => {
    const keyCode = ev.which
    switch (keyCode) {
      case KeyCodes.down:
        let el: any = window.document.querySelector("#SearchList")
        el.focus()
        break
    }
  }
}
