import './example.css'
import {
    AccordionProvider,
    BadgeCounter,
    Heading,
    Icon,
    Link,
    MessageList,
    MessageListItem,
    NavigationList,
    NavigationListItem,
    SideNav,
    SideNavItem,
    SideNavLink,
    SideNavList,
} from '@rijkshuisstijl-community/components-react';

function Example() {
    return (
        <>
            <main className="rhc-templates-page  rhc-templates-background-color-white">
                <div>
                    <div className="rhc-templates-page-container">
                        <SideNav className={'rhc-side-nav'} role="">
                            <SideNavList>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="mail">
                                        Berichtenbox
                                    </SideNavLink>
                                </SideNavItem>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="inbox">
                                        MijnZaken
                                        <BadgeCounter>2</BadgeCounter>
                                    </SideNavLink>
                                </SideNavItem>
                            </SideNavList>
                            <div className="separator"/>
                            <SideNavList>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="user">
                                        Identiteit
                                    </SideNavLink>
                                </SideNavItem>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="currency-euro">
                                        Financiën
                                    </SideNavLink>
                                </SideNavItem>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="briefcase">
                                        Werk
                                    </SideNavLink>
                                </SideNavItem>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="favoriet">
                                        Gezondheid
                                    </SideNavLink>
                                </SideNavItem>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="home">
                                        Wonen
                                    </SideNavLink>
                                </SideNavItem>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="car">
                                        Vervoer
                                    </SideNavLink>
                                </SideNavItem>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="backpack">
                                        Onderwijs
                                    </SideNavLink>
                                </SideNavItem>
                            </SideNavList>
                            <div className="separator"/>
                            <SideNavList>
                                <SideNavItem>
                                    <SideNavLink href="/#" icon="instellingen">
                                        Instellingen
                                    </SideNavLink>
                                </SideNavItem>
                            </SideNavList>
                        </SideNav>
                        <section className={'rhc-page-main-content'}>
                            <Heading level={1}>Welkom Bert Burger</Heading>
                            <div>
                                <Heading level={2}>Recent</Heading>
                                <div className="separator"/>
                                <MessageList>
                                    <MessageListItem
                                        description={'Update: Uw klacht bij gemeente Utrecht'}
                                        href={'#'}
                                        label={'Gemeente Utrecht'}
                                        metaData={'18/06/2024'}
                                    />
                                    <MessageListItem description={'Herinnering APK'} href={'#'} label={'RDW'}
                                                     metaData={'01/06/2024'}/>
                                    <MessageListItem
                                        description={'Vergunning uitbouw achter'}
                                        href={'#'}
                                        label={'Gemeente Den Haag'}
                                        metaData={'01/05/2024'}
                                    />
                                    <MessageListItem
                                        description={'Uw pensioenoverzicht'}
                                        href={'#'}
                                        label={'Pensioenfonds'}
                                        metaData={'03/03/2024'}
                                    />
                                </MessageList>
                            </div>
                            <div>
                                <Heading level={2}>Wat kan ik waar vinden?</Heading>
                                <div className="separator"/>
                                <NavigationList>
                                    <NavigationListItem
                                        description="Uw gegevens, familie en identiteitsbewijs"
                                        href={'#'}
                                        icon="user"
                                        label="Identiteit"
                                    />
                                    <NavigationListItem
                                        description="Uw inkomen, toeslagen, bijdragen en belastingen"
                                        href={'#'}
                                        icon="currency-euro"
                                        label="Financiën"
                                    />
                                    <NavigationListItem
                                        description="Uw pensioen, arbeidsgegevens en uitkeringen"
                                        href={'#'}
                                        icon="briefcase"
                                        label="Werk"
                                    />{' '}
                                    <NavigationListItem
                                        description="Donorregister en Persoonsgebonden budget"
                                        href={'#'}
                                        icon="favoriet"
                                        label="Gezondheid"
                                    />{' '}
                                    <NavigationListItem
                                        description="Uw energielabel, kadastrale- en WOZ-gegevens"
                                        href={'#'}
                                        icon="home"
                                        label="Wonen"
                                    />{' '}
                                    <NavigationListItem description="Uw voertuigen" href={'#'} icon="car"
                                                        label="Vervoer"/>{' '}
                                    <NavigationListItem
                                        description="Uw diploma’s en studiefinanciering / studieschuld"
                                        href={'#'}
                                        icon="backpack"
                                        label="Onderwijs"
                                    />
                                </NavigationList>
                            </div>
                            <div className="separator"/>
                            <div>
                                <Heading level={2}>Veelgestelde vragen</Heading>
                                <div className="separator"/>
                                <AccordionProvider
                                    sections={[
                                        {
                                            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
                                            label: 'Van welke organisaties kan ik berichten digitaal ontvangen?',
                                        },
                                        {
                                            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
                                            label: 'Wie heeft toegang tot mijn gegevens in MijnOverheid?',
                                        },
                                        {
                                            body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore\n      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla\n      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\n      laborum.',
                                            label: 'Ik wil mijn account opzeggen. Kan dat?',
                                        },
                                    ]}
                                />
                                <div className="separator"/>
                                <Link className="" href="#">
                                    Bekijk alle veelgestelde vragen
                                    <Icon icon={'pijl-naar-rechts'}/>
                                </Link>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Example
