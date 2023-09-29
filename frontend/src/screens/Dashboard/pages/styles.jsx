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
         /* background-color: #fafafa;
  display: flex;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */

         .headBtn {
           border: 1px solid rgba(0, 0, 0, 1);
           padding: 0.4rem 1rem !important;
           border-radius: 40px !important;
           cursor: pointer;
           &:hover {
             background-color: #f7f7f7;
           }
         }

         .listing_status {
           padding: 0.6rem 0.8rem;
           color: rgb(255, 56, 92);
           border-radius: 40px;
           background: rgba(240, 199, 207, 0.199);
           font-weight: 600;
           font-size: 11px;
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
             min-width: 1100px;
             /* table-layout: fixed; */

             /* @media (max-width: 1080px) {
        min-width: 100%;
      } */

             thead {
               tr {
                 text-align: center;
                 z-index: 200;
                 text-align: center;
                 th {
                   font-size: 13px;
                   font-weight: 700;
                   text-align: start;
                   color: #5c5c5c;
                   text-align: center;
                   border-bottom: 1px solid rgba(0, 0, 0, 0.08);
                   padding: 0 10px;
                   padding-bottom: 14px;
                   text-transform: uppercase;
                   cursor: pointer;
                   transition: all 0.3s var(--transition-2);
                   &:hover {
                     color: var(--dark-1);
                   }
                 }
               }
             }
             .status {
               padding: 0.6rem 1rem;
               background-color: #82eec743;
               color: #045235;
               border-radius: 40px;
               &.active {
                 background-color: #fbd8d857;
                 color: #e50b0b;
               }
             }
             tbody {
               tr {
                 transition: all 0.5s var(--transition-2);
                 z-index: 200;
                 &:nth-of-type(odd) {
                   background: rgba(0, 0, 0, 0.02);
                 }
                 &:hover {
                   background: rgba(0, 0, 0, 0.02);
                 }
                 td {
                   font-size: 16px;
                   font-weight: 600;
                   text-align: center;
                   padding: 18px 10px;
                   color: #222;
                   min-width: 0;
                   /* flex: 1; */
                     

                   border-bottom: 1px solid rgba(0, 0, 0, 0.08);

                   .true {
                     color: e72d2d;
                   }
                   .tablespan {
                     display: block;
                     padding: 2px;
                     font-size: 14px;
                     font-weight: 600;
                     /* width: 100%; */
                     /* display: block; */
                     border-radius: 4px;
                     color: #333;
                     text-align: center;
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
                     font-size: 13px;
                     color: #777;
                     font-weight: 600;
                   }
                   p {
                     font-size: 13px;
                     color: 16px;
                     font-weight: 600;
                     width: 80%;
                     margin: 0 auto;
                     text-align: center;
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
