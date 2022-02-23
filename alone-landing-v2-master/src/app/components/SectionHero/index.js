import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import bgBestSell from "../../images/bg-best-sell.jpeg";
import cup from "../../images/cup.svg";
import logoAlone from "../../images/alone-7.png";
import iconBestSeller from "../../images/icon-best-seller.svg";
import hope from "../../images/hope.png";
import bgHeroLayout2 from "../../images/hero-bg-layout-2.jpeg";
import { ButtonPurchase, LinkPurchase } from "../../pages/Home/home.style";
import { memo } from "react";
//hero_description: "Customers have designed their Nonprofit projects with Alone"
//highly_customizable: "Highly Customizable"
//multipurpose: "Multipurpose Non-profit WordPress Theme"
//non_profit_wordpress_theme: "Non-profit WordPress Theme"
//sales_over: "Sales Over"
//sell_number: "5700+"
function SectionHero({text_editor, general}) {
    let {hero_ss} = text_editor
    let {purchase_link, purchase_text, hero_layout = 'layout-2'} = general
    let {
        hero_description, highly_customizable,
        multipurpose, non_profit_wordpress_theme,
        sales_over, sell_number
    } = hero_ss

    let bg = {
        backgroundImage: `url(${bgHeroLayout2})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
    return (
        <Section id="hero-ss" position='relative' {...(hero_layout === 'layout-1' ? {} : bg)}>
            {hero_layout === 'layout-1' ?
                <Div className="row flex-md-row-reverse">
                    <Div className="col-md-6"
                         backgroundImage={`url(${bgBestSell})`}
                         backgroundPosition="center"
                         backgroundRepeat="no-repeat"
                         backgroundSize="cover"
                         textAlign="center"
                         display="flex"
                         flexDirection="column"
                         alignItems="center"
                         justifyContent="center"
                         minHeight={['100vh',]}>
                        <Img style={{transform: 'translateX(-50%)'}}
                             position="absolute"
                             top="0" left="50%" src={cup} alt="cup" />
                        <Div pt="130px" pb="160px">
                            <Img src={logoAlone} alt="alone 7" />
                            <Heading color="white" fontSize="20px" mt="25px" mb="40px">{hero_description}</Heading>
                            <Img src={iconBestSeller} alt="best seller" />
                        </Div>
                    </Div>
                    <Div className="col-md-6"
                         backgroundImage={`url(${hope})`}
                         backgroundPosition="center"
                         backgroundRepeat="no-repeat"
                         backgroundSize="cover"
                         textAlign="center"
                         display="flex"
                         flexDirection="column"
                         alignItems="center"
                         justifyContent="center"
                         minHeight={['100vh',]}
                    >
                        <Div pt="130px" pb="160px">
                            <Heading m="0" mb="6px" as="h1" fontWeight="bold" fontSize="48px">{highly_customizable}</Heading>
                            <Heading m="0" mb="33px" fontWeight="bold" fontSize="24px">{non_profit_wordpress_theme}</Heading>
                            <Heading as="h4" className="text-uppercase" m="0" fontWeight="bold" fontSize="24px" lineHeight="40px">{sales_over}</Heading>
                            <Div fontSize="100px" fontFamily="AXIS" fontWeight="800" mb="15px" lineHeight="1" color="accentColor">{sell_number}</Div>
                            <Text maxWidth="425px" fontSize="22px" m="auto">{multipurpose}</Text>
                        </Div>
                        <LinkPurchase
                            position="absolute"
                            bottom="0"
                            width="100%"
                            color="headingColor"
                            target="_blank"
                            href={purchase_link}>{purchase_text}</LinkPurchase>
                    </Div>
                </Div> :
                <Div className="container-fluid">
                    <Img position={['absolute']}
                         top={[0, 0, 'unset']}
                         bottom={[ 'unset','unset','unset', '85px']}
                         left={['calc(50% - 105px)','calc(50% - 105px)','calc(50% - 105px)','60px']} src={cup} alt="cup" />
                    <Div pt="130px" pb="115px" textAlign="center">
                        <Img src={logoAlone} alt="alone 7" />
                        <Heading color="white" fontSize="20px" mt="25px" mb="40px">{multipurpose}</Heading>
                        <Img src={iconBestSeller} alt="best seller" mb="56px" />
                        <Heading color="white" m="0" mb="6px" as="h1" fontWeight="bold" fontSize={['46px', '46px', '48px']}>{highly_customizable}</Heading>
                        <Heading color="white" m="0" mb="15px" fontWeight="bold" fontSize="24px">{non_profit_wordpress_theme}</Heading>
                        <Text color="white" fontSize="18px" mb="45px">{hero_description}</Text>
                        <ButtonPurchase mt="42px" target="_blank" href={purchase_link}>{purchase_text}</ButtonPurchase>
                    </Div>
                </Div>
            }
        </Section>
    )
}

export default memo(SectionHero);
