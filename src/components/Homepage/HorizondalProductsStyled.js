import styled from "styled-components";

export const HorizondalProductsStyled = styled.div`
  .containermax {
    width: 100%;
    padding: 20px 12%;
    background-color: white;
    margin-top: 70px;

    .header-wrapper {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .heading-main {
        display: flex;
        padding-left: 300px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .header {
          font-size: 26px;
          font-weight: 500;
          // margin-bottom: 20px;
          // margin-left: 122px;
          text-align: center;
        }
        .subheading {
          font-size: 16px;
          font-weight: 400;
          color: grey;
        }
      }
      .seeAll {
        font-size: 18px;
        color: #9f2b68;
        margin: 30px 30px 0px 30px;
      }
    }

    .container {
      margin: 20px auto;
      padding: 0 20px;
      position: relative;

      .arrowWrapper {
        position: absolute;
        z-index: 10;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0 37px 0px 0px;

        .arrowBTN {
          border: none;
          background-color: rgba(255, 255, 255, 0.8);
          color: #555;
          font-size: 1.5rem;
          padding: 5px;
          border-radius: 50%;
          cursor: pointer;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: rgba(255, 255, 255, 0.5);
          }
        }

        .arrowLeft {
          order: 1;
        }

        .arrowRight {
          order: 3;
        }
      }

      .cardContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        justify-content: flex-start;
        align-items: center;
        // padding: 0 40px;

        .cardWrapper {
          // flex: 0 0 calc(25% - 20px); /* 4 cards per row */
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.5);
          width: 200px;
          box-shadow: 0 2px 4px #f2f2f2;

          .cardImage {
            width: 100%;
            height: 200px;
            overflow: hidden;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .cardDetails {
            padding: 10px;

            .name {
              font-weight: 550;
              font-size: 1rem;
              margin-bottom: 5px;
            }

            .category {
              font-size: 0.9rem;
              color: #666;
              margin-bottom: 5px;
            }

            .priceWrapper {
              display: flex;
              align-items: center;
              margin-bottom: 5px;
              justify-content: space-between;

              .price {
                font-weight: 550;
                font-size: 1rem;
              }

              .wholePrice {
                font-size: 0.9rem;
                color: #666;
                text-decoration: line-through;
                margin-left: 10px;
                margin-top: 2px;
              }
            }

            .addTocartCTA {
              margin-top: 10px;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .addToCart {
              background-color: #9f2b68;
              color: #fff;
              border: none;
              border-radius: 5px;
              padding: 8px 15px;
              cursor: pointer;
              font-size: 1rem;
              margin-right: 10px;

              &:hover {
                background-color: #facbea;
                color: black;
              }
            }
          }
        }
      }
    }
  }
`;
