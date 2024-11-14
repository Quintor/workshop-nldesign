import {PropsWithChildren} from 'react';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/index.scss';
import {
    Logo,
    Icon,
    NavBar,
    PageHeader,
    Footer,
    LinkList,
    LinkListLink
} from '@rijkshuisstijl-community/components-react';

const RHCTheme = ({children}: PropsWithChildren<{}>) => <div className="rhc-theme">{children}</div>;

export default function RootLayout({children}: PropsWithChildren<{}>) {
    return (
        <RHCTheme>
            <div className="rhc-background-color-white">
                <PageHeader>
                    <Logo organisation="Windesheim" subtitle="University of Applied Sciences">
                        <Icon icon={'nederland-map'} className={'dutch-map'}/>
                    </Logo>
                </PageHeader>
            </div>
            <NavBar
                items={[
                    {href: '/', label: 'Home', id: '1'},
                    {href: '/', label: 'Nieuws', id: '2'},
                    {href: '/', label: 'Contact', id: '3'},
                ]}
            ></NavBar>
            <div className="page-container">

                <main className="page rhc-templates-main-content">
                    {children}
                </main>
                <Footer
                    background="primary-filled"
                    columns={[
                        {
                            children:
                                <LinkList>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Contact</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Abonneren</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>RSS</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Vacatures</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Sitemap</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Help</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Archief</LinkListLink>
                                </LinkList>,
                            heading: 'Service'
                        },
                        {
                            children:
                                <LinkList>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Over Rijksoverheid.nl</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Wetten en regelingen</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Copyright</LinkListLink><LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Privacy</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Cookies</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Toegankelijkheid</LinkListLink>
                                    <LinkListLink href="#"icon={<Icon icon="chevron-right"/>}>Open data</LinkListLink>
                                    <LinkListLink href="#" icon={<Icon icon="chevron-right"/>}>Kwetsbaarheid melden</LinkListLink>
                                </LinkList>,
                            heading: 'Over deze site'
                        }
                    ]}
                    heading="De Rijksoverheid. Voor Nederland"
                    headingLevel={4}
                />
            </div>
        </RHCTheme>
    );
}
