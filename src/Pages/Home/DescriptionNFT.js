import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

function DescriptionNFT(param){

    const { t, i18n } = useTranslation()
    return(
        <div class="container">
            <div class="row">
                <div class="col-sm-8">
                    {param.title === "collection" && 
                        <img className="image-description" src={require(process.env.PUBLIC_URL+'../../Illustration/video/'+param.title+'.png').default} alt={param.title}/>
                    }
                    {param.title != "collection" &&
                    <video autoPlay loop muted>
                        <source className="image-description" src={require(process.env.PUBLIC_URL+'../../Illustration/video/'+param.title+'.mp4').default} type="video/mp4" />
                    </video>}
                </div>
                <div class="col-sm text-description">
                    <p><Trans>home.attribut.{param.title}</Trans></p>
                </div>
            </div>
        </div>
    )
}

export default DescriptionNFT;
