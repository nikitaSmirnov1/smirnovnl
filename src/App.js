import React from "react";
import ReactDOM from "react-dom";
import {
  useAdaptivity,
  AppRoot,
  SplitLayout,
  SplitCol,
  ViewWidth,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  SimpleCell,
  ModalPage,
  ModalRoot,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import ModalPage2Content from './components/ModalPage2Content';
import ModalPage1Content from "./components/ModalPage1Content";

function App() {

  const [modalActive, setModalActive] = React.useState(null);

  const onNextClick = () => {
    setModalActive('secondPage');

    //GetInfoOf(7707083893);
  }

  const { viewWidth } = useAdaptivity();
  const isMobile = viewWidth <= ViewWidth.MOBILE;

  const modal = (
    <ModalRoot activeModal={modalActive}>
      <ModalPage id="firstPage" onClose={() => setModalActive(null)}>
        <ModalPage1Content onNextClick={onNextClick}/>
      </ModalPage>

      <ModalPage id="secondPage" onClose={() => setModalActive(null)}>
        <ModalPage2Content />
      </ModalPage>
    </ModalRoot>
  );


  return (
    <AppRoot>
      <SplitLayout header={<PanelHeader separator={false} />} modal={modal}>
        <SplitCol spaced={viewWidth > ViewWidth.MOBILE}>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                <SimpleCell onClick={() => { setModalActive('firstPage') }}>First Modal</SimpleCell>
                <SimpleCell onClick={() => { setModalActive('secondPage') }}>Second Modal</SimpleCell>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
      
    </AppRoot>
  );
}

export default App;
