import React from "react";

interface CardProps {
  children: React.ReactNode;
  size: string;
}
const Card: React.FC<CardProps> & { Header: React.FC<CardHeaderProps>; Body: React.FC<CardBodyProps>; Footer: React.FC<CardFooterProps> } = ({
  children,
  size,
}) => {
  return <div className={`${size} shadow rounded-[20px] p-4`}>{children}</div>;
};
interface CardHeaderProps {
  children: React.ReactNode;
  classname?: string;
}
const CardHeader: React.FC<CardHeaderProps> = ({ children, classname }) => {
  return (
    <>
      <div className={classname}>{children}</div>
    </>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  classname?: string;
}
const CardBody: React.FC<CardBodyProps> = ({ children, classname }) => {
  return (
    <>
      <div className={classname}>{children}</div>
    </>
  );
};
interface CardFooterProps {
  children: React.ReactNode;
  classname?: string;
}
const CardFooter: React.FC<CardFooterProps> = ({ children, classname }) => {
  return (
    <>
      <div className={classname}>{children}</div>
    </>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
export default Card;
