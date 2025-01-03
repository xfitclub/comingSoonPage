function createMailBody(name) {
            return `<!DOCTYPE html>
    <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
        xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="x-apple-disable-message-reformatting">
        <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
    
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
    
    
        <!--[if !mso]><!-->
    
        <link rel="preload" as="style"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
        <link rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap">
    
        <style type="text/css">
            // TODO: fix me!
            @import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap);
        </style>
    
        <!--<![endif]-->
    
        <!--[if mso]>
              <style>
                  // TODO: fix me!
                  * {
                      font-family: sans-serif !important;
                  }
              </style>
            <![endif]-->
    
    
        <!-- NOTE: the title is processed in the backend during the campaign dispatch -->
        <title></title>
    
        <!--[if gte mso 9]>
            <xml>
                <o:OfficeDocumentSettings>
                    <o:AllowPNG/>
                    <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
            </xml>
            <![endif]-->
    
        <style>
            :root {
                color-scheme: light;
                supported-color-schemes: light;
            }
    
            html,
            body {
                margin: 0 auto !important;
                padding: 0 !important;
                height: 100% !important;
                width: 100% !important;
    
                overflow-wrap: break-word;
                -ms-word-break: break-all;
                -ms-word-break: break-word;
                word-break: break-all;
                word-break: break-word;
            }
    
    
    
    
    
    
            center,
            #body_table {}
    
            ul,
            ol {
                padding: 0;
                margin-top: 0;
                margin-bottom: 0;
            }
    
            li {
                margin-bottom: 0;
            }
    
    
    
            .list-block-list-outside-left li {
                margin-left: 20px !important;
            }
    
            .list-block-list-outside-right li {
                margin-right: 20px !important;
            }
    
    
            .paragraph {
                font-size: 16px;
                font-family: Open Sans, sans-serif;
                font-weight: normal;
                font-style: normal;
                text-align: start;
                line-height: 1;
                text-decoration: none;
                color: #141414;
    
            }
    
    
            .heading1 {
                font-size: 25px;
                font-family: Open Sans, sans-serif;
                font-weight: normal;
                font-style: normal;
                text-align: start;
                line-height: 1;
                text-decoration: none;
                color: #141414;
    
            }
    
    
            .heading2 {
                font-size: 22px;
                font-family: Open Sans, sans-serif;
                font-weight: normal;
                font-style: normal;
                text-align: start;
                line-height: 1;
                text-decoration: none;
                color: #141414;
    
            }
    
    
            .heading3 {
                font-size: 18px;
                font-family: Open Sans, sans-serif;
                font-weight: normal;
                font-style: normal;
                text-align: start;
                line-height: 1;
                text-decoration: none;
                color: #141414;
    
            }
    
    
            .list {
                font-size: 16px;
                font-family: Open Sans, sans-serif;
                font-weight: normal;
                font-style: normal;
                text-align: start;
                line-height: 1;
                text-decoration: none;
                color: #141414;
    
            }
    
    
            p a,
            li a {
    
                color: #FE644A;
                text-decoration: underline;
                font-style: normal;
                font-weight: normal;
    
            }
    
            .button-table a {
                text-decoration: none;
                font-style: normal;
                font-weight: normal;
            }
    
            .paragraph>span {
                text-decoration: none;
            }
    
            .heading1>span {
                text-decoration: none;
            }
    
            .heading2>span {
                text-decoration: none;
            }
    
            .heading3>span {
                text-decoration: none;
            }
    
            .list>span {
                text-decoration: none;
            }
    
    
            * {
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
            }
    
            div[style*="margin: 16px 0"] {
                margin: 0 !important;
            }
    
            #MessageViewBody,
            #MessageWebViewDiv {
                width: 100% !important;
            }
    
            table {
                border-collapse: collapse;
                border-spacing: 0;
                mso-table-lspace: 0pt !important;
                mso-table-rspace: 0pt !important;
            }
    
            table:not(.button-table) {
                border-spacing: 0 !important;
                border-collapse: collapse !important;
                table-layout: fixed !important;
                margin: 0 auto !important;
            }
    
            th {
                font-weight: normal;
            }
    
            tr td p {
                margin: 0;
            }
    
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            a[x-apple-data-detectors],
    
            .unstyle-auto-detected-links a,
            .aBn {
                border-bottom: 0 !important;
                cursor: default !important;
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            .im {
                color: inherit !important;
            }
    
            .a6S {
                display: none !important;
                opacity: 0.01 !important;
            }
    
            img.g-img+div {
                display: none !important;
            }
    
            @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
                u~div .contentMainTable {
                    min-width: 320px !important;
                }
            }
    
            @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
                u~div .contentMainTable {
                    min-width: 375px !important;
                }
            }
    
            @media only screen and (min-device-width: 414px) {
                u~div .contentMainTable {
                    min-width: 414px !important;
                }
            }
        </style>
    
        <style>
            @media only screen and (max-device-width: 700px) {
                .contentMainTable {
                    width: 100% !important;
                    margin: auto !important;
                }
    
                .single-column {
                    width: 100% !important;
                    margin: auto !important;
                }
    
                .multi-column {
                    width: 100% !important;
                    margin: auto !important;
                }
    
                .imageBlockWrapper {
                    width: 100% !important;
                    margin: auto !important;
                }
            }
    
            @media only screen and (max-width: 700px) {
                .contentMainTable {
                    width: 100% !important;
                    margin: auto !important;
                }
    
                .single-column {
                    width: 100% !important;
                    margin: auto !important;
                }
    
                .multi-column {
                    width: 100% !important;
                    margin: auto !important;
                }
    
                .imageBlockWrapper {
                    width: 100% !important;
                    margin: auto !important;
                }
            }
        </style>
        <style>
            .link-4a47ef10-5d81-4a5d-905b-3824905559e5-Q1WJor4w_RL4515_DE6rP {
                color: #3962D3 !important;
            }
        </style>
    
        <!--[if mso | IE]>
        <style>
            .list-block-outlook-outside-left {
                margin-left: -18px;
            }
        
            .list-block-outlook-outside-right {
                margin-right: -18px;
            }
    
            a:link, span.MsoHyperlink {
                mso-style-priority:99;
                
        color: #FE644A;
        text-decoration: underline;
        font-style: normal;
        font-weight: normal;
    
            }
        </style>
    <![endif]-->
    
    
    </head>
    
    <body width="100%" style="margin: 0; padding: 0 !important; mso-line-height-rule: exactly; background-color: #ffffff;">
        <center role="article" aria-roledescription="email" lang="en" style="width: 100%; background-color: #ffffff;">
            <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" id="body_table" width="100%" style="background-color: #ffffff;">
                <tbody>    
                    <tr>
                        <td>
                        <![endif]-->
            <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="700"
                style="margin: auto;" class="contentMainTable">

                <tr class="wp-block-editor-imageblock-v1">
                    <td style="background-color:#ffffff;padding-top:20px;padding-bottom:30px;padding-left:20px;padding-right:20px"
                        align="center">
                        <table align="center" width="429" class="imageBlockWrapper"
                            style="width:429px;border-spacing:0;border-collapse:collapse" role="presentation">
                            <tbody>
                                <tr>
                                    <td style="padding:0"><a href="http://www.xfitclub.in/"><img
                                                src="https://api.smtprelay.co/userfile/fb3c2b32-e010-46dc-9617-96439c4f847f/banner.png"
                                                width="429" height="" alt=""
                                                style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0"
                                                class="g-img"></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr class="wp-block-editor-headingblock-v1">
                    <td valign="top"
                        style="background-color:#ffffff;display:block;padding-top:45px;padding-right:20px;padding-bottom:5px;padding-left:20px;text-align:center">
                        <p style="font-family:Open Sans, sans-serif;text-align:center;line-height:25.30px;font-size:22px;background-color:#ffffff;color:#141414;margin:0;word-break:normal"
                            class="heading2"><span style="font-weight: bold" class="bold">Hi ${name},</span></p>
                    </td>
                </tr>
                <tr class="wp-block-editor-paragraphblock-v1">
                    <td valign="top" style="padding:25px 50px 15px 50px;background-color:#ffffff">
                        <p class="paragraph"
                            style="font-family:Open Sans, sans-serif;text-align:center;line-height:27.20px;font-size:16px;margin:0;color:#141414;word-break:normal">
                            Thank you for joining the X-Fit Community! <br><br><b>Our story:</b> I once drove 30 minutes in
                            Bengaluru traffic to check out this "amazing gym" I found online. Guess what? It didn't even
                            exist anymore! 😅 <br> <br>That's why we started X-Fit. We do all the gym-hunting work for you.
                            Don't worry. <br> <br>We have a standardized checklist created from feedback from users like
                            yourself. Every gym listed on our platform is personally checked by X-Fit. No more wasted trips!
                            ✅ <br> <br>We're adding more great gyms every week! Meanwhile, you'll get updates about fitness
                            tips, awesome gyms near you, and special offers (all verified, promise!). <br> <br>Thanks again
                            for joining us! <br><br><br> <span style="font-weight: bold" class="bold">P.S.</span> Need help
                            finding a gym nearby? Reply and let us know where - we'll do the legwork for you! 🔍<br></p>
                    </td>
                </tr>
                <tr class="wp-block-editor-dividerblock-v1" align="center" valign="top">
                    <td
                        style="padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#ffffff">
                        <div style="background:#d3d3d3;font-size:1px;line-height:1px;border:0">&nbsp;</div>
                    </td>
                </tr>
                <tr class="wp-block-editor-paragraphblock-v1">
                    <td valign="top" style="padding:30px 50px 0px 50px;background-color:#ffffff">
                        <p class="paragraph"
                            style="font-family:Open Sans, sans-serif;text-align:left;line-height:27.20px;font-size:16px;margin:0;color:#141414;letter-spacing:0;word-break:normal">
                            To your health and fitness,<br>Aasim Hussain <br>CEO and Co-Founder, X-Fit. <br><span
                                style="color:#3962D3"><a href="http://www.xfitclub.in/" data-type="website"
                                    data-id="4a47ef10-5d81-4a5d-905b-3824905559e5-Q1WJor4w_RL4515_DE6rP"
                                    style="color:#3962D3 !important;"
                                    class="link-4a47ef10-5d81-4a5d-905b-3824905559e5-Q1WJor4w_RL4515_DE6rP">http://www.xfitclub.in/<br></a></span>
                        </p>
                    </td>
                </tr>
                <tr class="wp-block-editor-imageblock-v1">
                    <td style="background-color:#ffffff;padding-top:2px;padding-bottom:2px;padding-left:50px;padding-right:2px"
                        align="left">
                        <table align="left" width="142.56" class="imageBlockWrapper"
                            style="width:142.56px;border-spacing:0;border-collapse:collapse" role="presentation">
                            <tbody>
                                <tr>
                                    <td style="padding:0"><a href="http://www.xfitclub.in/"><img
                                                src="https://res.cloudinary.com/dxqdslrdu/image/upload/v1735563206/fitConnect/X-Fit-whiteBG_czsdob.png"
                                                width="142.56" height="" alt="xLogo"
                                                style="border-radius:0px;display:block;height:auto;width:100%;max-width:100%;border:0"
                                                class="g-img"></a></td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
            </table>
            <!--[if mso | IE]>
                        </td>
                    </tr>
                </tbody>
                </table>
                <![endif]-->
        </center>
    </body>
    
    </html>`;
    }
    