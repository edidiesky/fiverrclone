import styled from "styled-components";

export const Table = styled.div`
  width: 100%;
  padding: 10px 15px;
  background: #fff;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  /* gap: 10px; */
  transition: all 0.5s;
  border: 1px solid rgba(0, 0, 0, 0.1);

  .detailsImageWrapper {
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 100%);
    height: 10rem;

    img {
      width: 100%;
      object-fit: cover;
      position: absolute;
      border-radius: 6px;
      height: 100%;
    }
  }

  .listing_status {
    padding: 0.6rem 0.8rem;
    color: #fff;
    border-radius: 4px;
    background: var(--red);
    font-weight: 600;
  }

  .TableContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 2rem;
    &::-webkit-scrollbar {
      width: 7px;
      height: 7px;
      background: #ccc;
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background: #000;
      border-radius: 10px;
      transition: all 0.5s;
      &:hover {
        background: var(--dark-1);
      }
    }
    .tableWrapper {
      border-collapse: collapse;
      width: 100%;
      min-width: 1000px;
      @media (min-width: 1209px) {
        min-width: 1000px;
      }

      thead {
        tr {
          text-align: start;
          z-index: 200;
          text-align: start;
          th {
            font-size: 12px;
            font-weight: 700;
            text-align: start;
            font-family: "Roboto", sans-serif;

            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
            padding: 0 10px;
            padding-bottom: 14px;
            text-transform: uppercase;

            transition: all 0.3s var(--transition-2);
          }
        }
      }

      tbody {
        tr {
          transition: all 0.5s var(--transition-2);
          z-index: 200;

          &:hover {
            background: rgba(0, 0, 0, 0.02);
          }
          td {
            font-size: 13px;
            font-weight: 600;
            text-align: start;
            padding: 10px;
            color: #222;
            font-family: "Roboto", sans-serif;

            .true {
              color: e72d2d;
            }
            .tablespan {
              display: block;
              padding: 2px;
              font-size: 12px;
              font-weight: 600;
              /* width: 100%; */
              /* display: block; */
              border-radius: 4px;
              color: #333;
              text-align: start;
              &.true {
                color: #045235;
                /* background: #04523517; */
              }
              &.false {
                color: #e50b0b;
                /* background: #e50b0b12; */
              }
            }

            .true {
              color: var(--green);
              font-size: 12px;
            }
            .false {
              color: var(--red);
              font-size: 12px;
            }

            .imageGradient {
              position: absolute;
              bottom: 0;
              left: 0;
              height: 100%;
              width: 100%;
              background: rgba(0, 0, 0, 0.03);
              display: flex;
              align-items: center;
              width: 100%;
              justify-content: center;
              transition: all 0.6s var(--ease);
            }
          }
          .true {
            color: var(--success-color);
            font-size: 1.2rem;
          }
          .false {
            color: var(--error-color);
            font-size: 1.2rem;
          }

          .header {
            display: flex;
            flex-direction: column;
            gap: 7px;
            h3 {
              font-size: 12px;
              color: #777;
              font-weight: 600;
            }
            p {
              font-size: 12px;
              color: #ccc;
              font-weight: 400;
              width: 80%;
              margin: 0 auto;
              text-align: start;
              line-height: 1.8;
            }
          }

          .action {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            .icons {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                font-size: 15px;
                cursor: pointer;
              }
              &:hover {
                background: var(--grey-4);
              }
            }
            .details {
              padding: 8px 2px;
              background: var(--grey-4);
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
`;
