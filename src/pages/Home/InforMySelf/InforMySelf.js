import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import banner from "../../../assets/homepage/banner.jpg";
import background from "../../../assets/homepage/background.png";

const InforMySelf = () => {
    return (
        <div className="s-InforMySelf">
            <Container>
                <div>
                    <div className="s-InforMySelf_img">
                        <img src={banner} alt="" />
                    </div>
                    <div className="s-InforMySelf_background">
                        <img src={background} alt="" />
                    </div>
                    <div className="s-InforMySelf_infor">
                        <div className="s-InforMySelf_infor_child">
                            <h4>
                                <i className="fa-solid fa-star"></i>Trường Đại Học Công Nghệ Thông Tin - ĐHQG TPHCM
                            </h4>
                        </div>
                        <div className="s-InforMySelf_infor_child">
                            <h4>
                                <i className="fa-solid fa-star"></i>Frontend Developer
                            </h4>
                        </div>
                        <div className="s-InforMySelf_infor_child">
                            <h4>
                                <i className="fa-solid fa-star"></i>Design UI/UX
                            </h4>
                        </div>
                        <div className="s-InforMySelf_infor_child">
                            <h4>
                                <i className="fa-solid fa-star"></i>6 months frontend experience
                            </h4>
                        </div>
                        <div className="s-InforMySelf_infor_child">
                            <h4>
                                <i className="fa-solid fa-star"></i>Intern In BloomBergBusinessWeek
                            </h4>
                        </div>
                        <div className="s-InforMySelf_infor_child">
                            <h4>
                                <i className="fa-solid fa-star"></i>Major is Information System
                            </h4>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default InforMySelf;
