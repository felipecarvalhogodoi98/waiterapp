import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderModalBody = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 32px;
  background: #fff;
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      background: transparent;
      border: 0;
      line-height: 0;
    }
  }

  .status-contaier {
    margin-top: 2rem;

    small {
      opacity: 0.8;
      font-size: 14px;
    }

    div {
      margin-top: 0.5rem;
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`;

export const OrderModalDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-size: 14px;
    font-weight: 500;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .item {
      display: flex;
      align-items: flex-start;

      img {
        border-radius: 6px;
        object-fit: cover;
      }

      .quantity {
        font-size: 14px;
        color: #666;
        min-width: 20px;
        display: block;
        margin-left: 12px;
      }

      .product-details {
        display: flex;
        flex-direction: column;
        margin-left: 4px;

        strong {
          display: block;
          font-size: 1rem;
          margin-bottom: 4px;
          line-height: 1;
        }

        span {
          font-size: 14px;
          color: #666;
        }
      }
    }

    .total {
      margin-top: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        font-size: 14px;
        opacity: 0.8;
        font-weight: 500;
      }
    }
  }
`;

export const Actions = styled.footer`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 3rem;
    border: none;
  }

  button.primary {
    background-color: #333;
    color: #fff;
  }

  button.secondary {
    background-color: transparent;
    color: #d73035;
  }
`;
