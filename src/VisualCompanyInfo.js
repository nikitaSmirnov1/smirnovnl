import {
    InfoRow,
    Div,
    Card,
    List,
    Cell
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

const VisualCompanyInfo = ({rawInformation}) => {

    if(rawInformation === false || rawInformation === undefined)
    {
        return (<></>);
    }

    let companyName = 'nothing';
    let companyStatus = 'nothing';
    let error = false;
    const companyStatusRus = {
        'ACTIVE': 'действующая',
        'LIQUIDATING': 'ликвидируется',
        'LIQUIDATED': 'ликвидирована',
        'BANKRUPT': 'банкротство',
        'REORGANIZING': 'в процессе присоединения к другому юрлицу, с последующей ликвидацией'
    }
    if (rawInformation.suggestions.length === 0) {
        error = true;
    } else {
        companyName = rawInformation.suggestions[0].data.name.short_with_opf;
        companyStatus = companyStatusRus[ rawInformation.suggestions[0].data.state.status ];
    }

    return (
        <Div>
            {!error
                ? <Card mode="shadow">
                    <Cell multiline>
                        <InfoRow header={"Название компании: "}>
                            {companyName}
                        </InfoRow>
                    </Cell>
                    <Cell multiline>
                        <InfoRow header={"Статус: "}>
                            {companyStatus}
                        </InfoRow>
                    </Cell>

                  </Card>
                : <Div>
                    <InfoRow header={'По заданному ИНН коду организации не найдено'}/>
                  </Div>
            }
        </Div>
    )
}

export default VisualCompanyInfo