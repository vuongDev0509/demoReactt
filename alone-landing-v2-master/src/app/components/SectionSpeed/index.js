import { Div, Heading, Img, Section } from "../../styles/base.style";
import bgSpeed from "../../images/bg-speed.png";
import speed from "../../images/speed.png";
import { ButtonPurchase } from "../../pages/Home/home.style";
import { memo } from "react";

//optimized: "Optimized for Fast Loading Speed"
//reduce_file_size: "Reduce File Size"
//speed_description: "Speed is one of the most crucial aspects of any website. When a site loads quickly, visitors tend to have more enjoyable experiences."
function SectionSpeed({text_editor, general}) {
    let {speed_ss} = text_editor
    let {purchase_text, purchase_link} = general
    let {optimized, reduce_file_size, speed_description} = speed_ss
    return (
        <Section id="speed-ss" p="90px 0 110px">
            <Div className="container">
                <Div className="row flex-md-row-reverse">
                    <Div className="col-md-6" mb={['30px', '30px', 0]}>
                        <Div backgroundImage={`url(${bgSpeed})`}
                             position="absolute"
                             width="100%"
                             right="30%"
                             height="100%"
                             backgroundSize="contain"
                             backgroundRepeat="no-repeat"
                             backgroundPosition="center calc(100% - 60px)"
                             zIndex="1"
                        />
                        <Img position="relative" zIndex="2" src={speed} alt="speed" />
                    </Div>
                    <Div className="col-md-6" zIndex="2">
                        <Div fontWeight="500" fontSize="18px" mb="15px">{reduce_file_size}</Div>
                        <Heading className="text-uppercase" fontSize="36px" mb="15px">{optimized}</Heading>
                        <Div>{speed_description}</Div>
                        <ButtonPurchase href={purchase_link} target="_blank" mt="45px">{purchase_text}</ButtonPurchase>
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default memo(SectionSpeed);
