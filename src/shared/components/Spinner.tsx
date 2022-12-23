import { Spin } from "antd"

export const Spinner = () => (
  <div className="spinner-container">
    <Spin size="large">
      <div className="content" />
    </Spin>
  </div>
)