import React from 'react'

function MessageComponent(props) {
    let messages=['0th minute','1st minute','2nd minute','3rd minute','4th minute','5th minute','6th minute','7th minute','8th minute','9th minute','10th minute','11th minute','12th minute','13th minute','14th minute',
                    '15th minute','16th minute','17th minute','18th minute','19th minute','20th minute','21st minute','22nd minute','23rd minute','24th minute','25th minute','26th minute','27th minute','28th minute','29th minute','30th minute','31st minute','32nd minute','33rd minute','34th minute','35th minute','36th minute','37th minute','38th minute','39th minute','40th minute','41st minute','42nd minute','43rd minute','44th minute','45th minute','46th minute','47th minute','48th minute','49th minute','50th minute','51st minute','52nd minute','53rd minute','54th minute','55th minute','56th minute','57th minute','58th minute','59th minute']
                console.log("Message Component")
                return (
        <div>
            {
                messages[props.value]
            }
        </div>
    )
}

export default React.memo(MessageComponent)