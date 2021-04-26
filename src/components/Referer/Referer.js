import React from 'react';
import { TableWholeWrap, TableHead, TableSecond, EachBox, TableThirdWrap, TableThird } from './Referer.styled';

const Referer = () => {

    const second_head = ["LOCATION", "VIEWS", "SALES", "CONVERSION", "TOTAL"];
    const datas = [{ location: "google.com", views: "3746", sales: "752", conversion: "43%", total: "$19,291" },
    { location: "facebook.com", views: "8126", sales: "728", conversion: "32%", total: "$17,638" },
    { location: "twitter.com", views: "8836", sales: "694", conversion: "28%", total: "$16,218" },
    { location: "Direct, email, IM", views: "1173", sales: "645", conversion: "24%", total: "$14,421" },
    { location: "linkedin.com", views: "2739", sales: "539", conversion: "20%", total: "$12,370" }];

    return (
        <TableWholeWrap>
            <TableHead>
                Referer
            </TableHead>
            <TableSecond>
                {second_head.map(val =>
                    <EachBox>
                        {val}
                    </EachBox>
                )}
            </TableSecond>
            <TableThirdWrap>
                {datas.map(val => (
                    <TableThird>
                        <EachBox>
                            {val.location}
                        </EachBox>
                        <EachBox>
                            {val.views}
                        </EachBox>
                        <EachBox>
                            {val.sales}
                        </EachBox>
                        <EachBox>
                            {val.conversion}
                        </EachBox>
                        <EachBox>
                            {val.total}
                        </EachBox>
                    </TableThird>
                ))}
            </TableThirdWrap>
        </TableWholeWrap>
    )
}

export default Referer;