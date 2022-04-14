import { GetCompanyInfoFrom } from "../DaDataInfoReception"
import VisualCompanyInfo from "../VisualCompanyInfo";
import React from "react";
import ReactDOM from "react-dom";
import {
  InfoRow,
  FormItem,
  FormLayout,
  Div,
  Input
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const ModalPage2Content = () => {

    const [inputString, setInputString] = React.useState("");
    const [isRequestCodeValid, setIsRequestCodeValid] = React.useState(false);
    const [rawCompanyData, setRawCompanyData] = React.useState(false);

    React.useEffect(() => {
        if ((inputString.length === 10) || (inputString.length === 12)) {

            setIsRequestCodeValid(true);
            GetCompanyInfoFrom(inputString).then((result) => {
                console.log('hay all! We are done!');
                setRawCompanyData(result);
            });

        } else {
            setIsRequestCodeValid(false)
            setRawCompanyData(false)
        }
    }, [inputString])

  return (
    <FormLayout>
        <FormItem
            top='ИНН номер'
            status={isRequestCodeValid ? 'valid' : 'error'}
            bottom={
                isRequestCodeValid
                    ? 'ИНН введен корректно'
                    : `цифр должно быть либо 10, либо 12. Сейчас ${inputString.length} цифр`
            }
        >
            <Input onChange={(e) => setInputString(e.target.value)} value={inputString} type='number'/>
        </FormItem>

        <VisualCompanyInfo rawInformation={rawCompanyData}/>
    </FormLayout>
  )
}

export default ModalPage2Content
