import styles from "./styles/information.module.css";

interface InformationLayoutProps {
  status: string;
}

export const InformationLayout = ({ status }: InformationLayoutProps) => {
  return <div className={styles.information}>{status}</div>;
};
