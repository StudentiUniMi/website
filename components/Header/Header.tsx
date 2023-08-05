import { FontSizes, Text, Image, FontWeights, ITextStyles, Link, useTheme } from '@fluentui/react';
import { useEffect, useRef } from 'react';
import HeaderMenu from './HeaderMenu';

const Header = () => {
  var theme = useTheme();

  const logoProperties = {
    width: 25,
    height: 25,
    marginTop: 3
  };

  const logoFileName = 'unimi150.png';

  const headerStyle = {
    zIndex: 2,
    backgroundColor: theme.palette.white,
    borderBottom: '1px solid',
    borderColor: theme.palette.neutralQuaternary,
    marginBottom: -1
  };

  const titleStyle: ITextStyles = {
    root: {
      fontSize: FontSizes.size20,
      fontWeight: FontWeights.semibold,
      color: theme.palette.themePrimary
    }
  };

  const headerRef = useRef<HTMLHeadingElement>(null);
  const prevScrollPos = useRef(0);
  const prevScrollDirection = useRef("none");

  const debounce = (func: any, delay: number) => {
    let timeout: any;
    return (...args: any) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Handle scroll logic
  useEffect(() => {
    window.addEventListener("scroll", debounce(() => {
      window.requestAnimationFrame(() => {
        const currentScrollPos = window.pageYOffset;
        let currentScrollDirection = "none";
        if (prevScrollPos.current > currentScrollPos) {
          currentScrollDirection = "up";
        } else if (prevScrollPos.current < currentScrollPos) {
          currentScrollDirection = "down";
        }
        if (
          prevScrollDirection.current === "down" &&
          currentScrollDirection === "up"
        ) {
          headerRef.current?.classList.remove("hidden");
          headerRef.current?.classList.add("shown");
        } else if (
          prevScrollDirection.current === "up" &&
          currentScrollDirection === "down" &&
          currentScrollPos > 200
        ) {
          headerRef.current?.classList.remove("shown");
          headerRef.current?.classList.add("hidden");
        } else if (
          prevScrollDirection.current === "down" &&
          currentScrollDirection === "down" &&
          currentScrollPos > 200
        ) {
          headerRef.current?.classList.remove("shown");
          headerRef.current?.classList.add("hidden");
        }
        prevScrollPos.current = currentScrollPos;
        prevScrollDirection.current = currentScrollDirection;
      });
    }, 10));
  }, []);

  return (
    <header ref={headerRef} style={headerStyle} className="header shown">

      <div className="d-flex flex-row" style={{ marginRight: 15, marginLeft: 15, marginBottom: 0 }}>

        <div style={{ maxWidth: 250, paddingLeft: 0, paddingRight: 0, display: 'flex', alignItems: 'center' }}>
          <div className="d-flex align-items-center" style={{ width: 250, gap: 10 }}>
            <Link href="http://studentiunimi.it/">
              <Image
                id="logo"
                alt="Logo"
                src={'/logo/' + logoFileName}
                style={logoProperties}
              />
            </Link>

            <Link href="http://studentiunimi.it/" className="text-decoration-none">
              <Text styles={titleStyle}>Network StudentiUniMi</Text>
            </Link>
          </div>
        </div>

        <div style={{ paddingLeft: 0, paddingRight: 0, flexGrow: 1, overflowX: 'hidden', overflowY: 'hidden' }}>
          <HeaderMenu />
        </div>

      </div>

    </header>
  )
};

export default Header;