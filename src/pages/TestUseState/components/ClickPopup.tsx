import { Button, Modal } from "antd";
import React from "react";
import { useState } from "react";

const TestUseState = () => {

  const [alertWindow, setAlertWindow] = useState(false)

  return (
    <React.Fragment>
      <Button onClick={() => { setAlertWindow(true) }}>点击打开弹窗</Button>
      <Modal
        title='这里是title'
        visible={alertWindow}
        onOk={() => { setAlertWindow(false) }}
        // onOk={function () { setAlertWindow(false) }}

        onCancel={() => { setAlertWindow(false) }}
        // onCancel={function () { setAlertWindow(false) }}
      />
    </React.Fragment>
  )
}

export default TestUseState;

