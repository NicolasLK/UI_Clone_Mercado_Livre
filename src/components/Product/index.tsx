import React from "react";

import tshirtImage from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import SellerInfo from "../SellerInfo"

import {
    Container,
    Row,
    Panel,
    Column,
    Gallery,
    Section,
    Description,
} from "./styles";

const Product: React.FC = () => {
    return (
        <Container>
            <Row>
                <a href="#">Compartilhar</a>
                <a href="#">Vender um igual</a>
            </Row>

            <Panel>
                <Column>
                    <Gallery>
                        <img src={tshirtImage} alt="T-Shirt" />
                    </Gallery>

                    <Info />
                </Column>

                <Column>
                    <ProductAction />
                    <SellerInfo />

                    <WarrantySection />
                    <WarrantySection />
                    <WarrantySection />
                </Column>
            </Panel>
        </Container>
    )
};

const WarrantySection = () => (
    <Section>
        <h4>Garantia</h4>

        <div>
            <span>
                <p className="title">Compra garantida com o Lorem Ipsum</p>
                <p className="description">
                    Receba o produto que esta aguardando ou devolvemos o seu dinheiro.
                </p>
            </span>
            <span>
                <p className="title">Garantia do vendedor</p>
                <p className="description">
                    Sem garantia.
                </p>
            </span>
        </div>

        <a href="#">Saiba mais sobre garantia</a>
    </Section>
)

const Info = () => (
    <Description>
        <h2>Descrição</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vestibulum vestibulum. Duis luctus aliquet sapien. Fusce egestas nulla arcu, ut auctor leo sagittis sed.
            Pellentesque lobortis, nisl ut suscipit ullamcorper, tortor lectus posuere est, id cursus odio ante id arcu. Donec pharetra dolor mauris, vitae facilisis ex lacinia ut.
            Duis dapibus ultricies eros, eu tincidunt lectus sodales eget. Proin faucibus, est non volutpat mollis, velit diam auctor metus, id lobortis lorem libero nec elit.
            Suspendisse at ipsum id nulla dictum pulvinar. Nulla ut lacus egestas, laoreet arcu facilisis, volutpat risus. Sed scelerisque purus auctor felis rhoncus, eget fringilla nisi cursus. Nunc ac mauris ligula.
            <br />
            <br />
            Itens Inclusos: <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            - 1x Led <br />
            <br />
            In bibendum mollis urna sed euismod. In blandit ipsum ac mi viverra dignissim. Nam risus nunc, porta vel sollicitudin at, vestibulum malesuada erat.
            Sed accumsan mi nunc, blandit venenatis sem feugiat id. Fusce ac orci tristique, ultrices magna sed, ullamcorper nisi. Nunc tincidunt dignissim ipsum et malesuada.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet lobortis egestas.
        </p>
    </Description>
)

export default Product;







