import { Component } from "react";

interface InformationLayoutProps {
  status: string;
}

class InformationLayout extends Component<InformationLayoutProps> {
  render() {
    return <div className="text-xl font-bold">{this.props.status}</div>;
  }
}

export default InformationLayout;
