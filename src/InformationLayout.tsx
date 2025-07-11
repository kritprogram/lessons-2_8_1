import { Component } from "react";
import styles from "./styles/information.module.css";

interface InformationLayoutProps {
  status: string;
}

class InformationLayout extends Component<InformationLayoutProps> {
  render() {
    return <div className={styles.information}>{this.props.status}</div>;
  }
}

export default InformationLayout;
