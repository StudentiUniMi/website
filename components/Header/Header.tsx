import { FontSizes, Text, Image, FontWeights, ITextStyles, Link, useTheme } from '@fluentui/react';
import HeaderMenu from './HeaderMenu';

const Header = () => {
    var theme = useTheme();
    const logoProperties = { width: 25, height: 25, marginTop: 3 };
    const logoFileName = 'unimi150.png';
    const titleStyle: ITextStyles = { root: { fontSize: FontSizes.size20, fontWeight: FontWeights.semibold, color: theme.palette.themePrimary } };
    
    return (
        <header style={{ borderBottom: '1px solid', borderColor: theme.palette.neutralLight, marginBottom: -1 }}>

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