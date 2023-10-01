import xlsx, { IJsonSheet } from "json-as-xlsx";
import { data } from "@/lib/data";
export function downloadToExcel () {
    
    let columns: IJsonSheet[] = [
        {
            sheet: "Database",
            columns:[
                    {label: "ID", value: "ID"},
                    {label: "Name", value: "Name"},
                    {label: "Link", value: "Link"},
                    {label: "Description", value: "Description"},
                    {label: "Subscribers", value: "Subscribers"},
                    {label: "Stats", value: (row) => new Date(row.Stats as string).toLocaleDateString()},
                    {label: "Tags", value: "Tags"},
                    {label: "Likes", value: "Likes"},              
            ],
            content: data,
        },
    ]
    let settings = {
        fileName: "Database",
    };

    xlsx(columns, settings)
}