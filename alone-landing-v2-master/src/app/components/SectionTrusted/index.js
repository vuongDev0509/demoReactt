import { Div, Heading, Img, Section, Text } from "../../styles/base.style";
import { TrustItem } from "../../pages/Home/home.style";
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/a11y/a11y.scss';
import { memo } from "react";

SwiperCore.use([Pagination, Autoplay, A11y]);
//customer_description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn."
//happy_customer: "More Than 23,000 Happy Customers"
//number_customer: "5700"
//number_review: "1400"
//review_description: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn."
//reviews_star: "Over 1,400 reviews with average 5-Star"
//trusted_heading: "Trusted By Companies & Business Owners Worldwide"
//testimonial: [{"avatar":"http://landingdev.local/wp-content/uploads/2021/05/avt.png","name":"Name 2","position":"Position 2","content":"Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn."},{"avatar":"http://landingdev.local/wp-content/uploads/2021/05/avt.png","name":"Name 1","position":"Position 1","content":"Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn.\r\n\r\n"},{"avatar":"http://landingdev.local/wp-content/uploads/2021/05/avt.png","name":"DIMASSI SHATT","position":"SUPPORT STAFF","content":"Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm andhn."}]

function SectionTrusted({text_editor}) {
    let {trusted_ss, testimonial} = text_editor
    let {
        customer_description,
        happy_customer,
        number_customer,
        number_review,
        review_description,
        reviews_star,
        trusted_heading
    } = trusted_ss
    return (
        <Section id="trusted-ss" p="95px 0 110px">
            <Div className="container">
                <Div className="row">
                    <Div className="col-md-6" mb={['30px', '30px', 0]}>
                        <Heading fontSize="30px" m="0 0 10px 0">{trusted_heading}</Heading>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation={true}
                            autoplay
                            loop={true}
                            pagination={{clickable: true}}
                        >
                            {testimonial.length && testimonial.map((e, i) => {
                                return (
                                    <SwiperSlide key={'test-' + i}>
                                        <Text ml="50px">{e.content}</Text>
                                        <Div display="flex" alignItems="center">
                                            <Img mr="18px" borderRadius="50%" src={e.avatar} alt="avatar" />
                                            <Div>
                                                <Heading className="text-uppercase" m="0" fontSize="20p">{e.name}</Heading>
                                                <Text className="text-uppercase" m="0" fontSize="14px">{e.position}</Text>
                                            </Div>
                                        </Div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </Div>
                    <Div className="col-md-3" mb={['10px', '10px', 0]}>
                        <TrustItem>
                            <Heading>{number_customer}<Text as="span" fontWeight="300">+</Text></Heading>
                            <Heading as="h4">{happy_customer}</Heading>
                            <Text>{customer_description}</Text>
                        </TrustItem>
                    </Div>
                    <Div className="col-md-3">
                        <TrustItem>
                            <Heading>{number_review}<Text as="span" fontWeight="300">+</Text></Heading>
                            <Heading as="h4">{reviews_star}</Heading>
                            <Text>{review_description}</Text>
                        </TrustItem>
                    </Div>
                </Div>
            </Div>
        </Section>
    )
}

export default  memo(SectionTrusted);
