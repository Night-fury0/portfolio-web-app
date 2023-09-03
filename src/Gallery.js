import './App.css'
import {NavBar} from './NavBar'
// import {Body} from './Body'

const images = [
  "https://lh3.googleusercontent.com/pw/AIL4fc-DaLpv11yQm-C94F-4PubpgT65MdHsrE_KdwwER-0hEZGlT4ioY8PY2pJN2m46HmXITMyoVnlAZOZWh59zR8eymPDMjwI2M8cp8UZmXLyGJ5qwUrBT7qlVuS-PAIQ4SRdKh5oMTRzxOOPAtE3JHXzh=w726-h968-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc_ZuznDkpMloR0fDYLbq10uX0uxZKmUAMshkpPJv9KGzJMUe_WigOdCPEpZZrbVLB0hros-8F326lDh7MfYHq3QK1gYKgUizpPkwgb-A1j7wsH8ZrhUyt7LgYnGMdJ5-qgHD2iwZflFt34Xfx-Rg5pQ=w726-h968-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-3QaUaDltif2P_Rh6TjLtg6TYkm0E3nC9HmlsaAsp2RLmcp-1LTxe88xOrYy5WxXxDAbzNZos5i-07VGVLQyZw4S4nbr3qx4nGJL-wiNIFqnvzPnJ-x1a_oicQqARecqm4HquA-q-hT_lBc6QMVxKl=w726-h968-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-ZvJ_4GO4X12Am_9FvFuuFBC9OHOPWgJ-sCg79OEpWqEuN37vABwRf-96mPPt2pYn1SSffVSxYS68sHAOfy1mYk_T6-HxHjjuneMcpHx9FnBsl2mooKSi5c6DH76woYk_ab7QprYj48JWSUBqj2_R7=w726-h968-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc_S3Xpb5N0cIzqEycUisDZNHXiipfHil-Fw3yEv0nRz06fOob1lNKJUQiUE4eDybrF0boywiXaBnh6u61MeRhq1yA-_UADzKhjvpKmdaUK9cpaTq_RoUouln9MpgWvHmDL_gwDiPzZrYjheBhpo-8Ka=w726-h968-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc93SjUXPfB_X1jmv6_iAfiNCsDDb8Ue-aNTchniUuVAat9vRlVLsw_DFDJzcIo-JSr4GHQPBAO7tJ48GCXXuOYkWleVOMRwVcnoFHexwnPRfNfkmmuSvmnO0_L5RBEk9td5_tj4iaaCmZTtPPXmZJdy=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc8DRho8SBoKOI2zWOJ_i9nxcgwu1eYfbNSgTbztDArlLAOsQ1KyJ_OqkLzb24IVgAgL-IX9x7moH3eC7nX0czsIfxydK7cZxHHlVoSmqlDCCeuzxlEp-445BTIPmHrt5nXR6rYKR-DewjQn4PSs7HdS=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc9601yonAQ4xhP7eH3Upa6KI29yIZk50R10pMSOf_7rHCdEap4IF1gpdeBHRwpmdl0PyekPnQM3NU1q0fPNf-jhlB4hu1dye73FFX5Zz9e1dO-eQ29gPeurscbYe_UabigMifslBTYl0fpiyS0rUSt5=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc_u94QPyytYdxLUTRWKu_4Gxrooy4hWgwmHqkJxy_-reMiuTOv7eQqy4yXzKpVYDwv31t9lhqPkPhmbMAqrwzFDxgzI4YnSZpIhoi6k92FoYM2-6szzYpfoZeDavdIa4Escg-pS4Z68YzHPhqz4NVlD=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc9jsgEyHPmfn9TkodaJN76HOZHtAuLGktP2E9rV5nk11MoIDchffxBsRTKWvNftnyJ0AdOj__UDG_RkPp_32wXz0yUL1M8jA43AzKo4p3H3f0Om3L6CyvyqD8W_Qg5ofZOt8LmuIwkAiHBbloHYV3W7=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-Z0fVmnLaxLiVOc2OtU8aLoRg2WYtLH9nb7T4eWzANIp-Gc0oUPa6y_Gs2osazOVDckazDf0iYL3aoo6ijrJv8Ek9AkBkta7h6AezcIcl6Y3DTWl1o1rRzYDYwWRykS4UbtH08c8HSU1z_noBSC5zM=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc_Jnu164OnAvqrot30gabnGBzTiia9cdivjGwOvpR8U5I96W8KqEK-2zrCj7kAHL0rz5R2lPSYZypzDPaAWGajDh3QrEnmZ_exPmLSz5Z4LYiMlock8mOzvN3v2PFnCDnKVs25z8orUvSnq0TBKTNWT=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc9paPCaqK2_oE_Wzf8SVjymwUCYTrW_Hy-MF3nWFIk1kG8tqACBpONPMgCBlZv2-U912W4WW3XVKlXnhIegH4teto2WYba7MArvvgRVDR9XD41ZIkMSCoauwlH5WVyvWHUXPzHenyDC3RNvnjdg5Qzj=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-fNtd7cZ21z5rcGn1UB91F_NuCzDTiBsV-Z4-f1bt9yOllF1bDPSR004ICHc0B2K2OESZP-ESkzlxhdIus44xsMX0pqXXAbbU-PROSHBRHkKOZSYmXPcCi76VkQHCl_DfsrTgf9UYz8BOg9I-YUNWk=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc9Y1q-fvP8TbSWMY0gPeliCtMkxAachfZTPcw8Co9bMDFAsYCFN7Q461_Xc7IbOWWUjni44NqOTrn8dEMSuCW5VNTweUISjBpjj5tJpK-E_nWlwkWvdfk07gycQFj31ols0Z_h2MeEsyF97J_fo3No8=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-m7ZeDQ1sWo5XfyjY_Oz1NfjPDgaFE5UzLspz38z49XNKV9uS-Z8vygHb2FNk_DAOClL8_ZzWQiQf1gLSWS6z77RyqOdeOG8rsOK4QXbatJklGbpEGJAFLn6LuQ7cG1bngrfZzg7TtUyKGc4FZsuYn=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc9Ba3UcbrU19IM9iVlGTRhAfMkt1aU8O2zOmY-oK7HqRGZKvtRYx2pwifUdoLEezWKvBN8oDD9nBeyGjcEYNX_Lpzc3yFgm2pITuW0gQ9EsTk6FKjANk9lx6tr8i7RnKhgx3LjvFOL4R_nV-NStba9C=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc8E9zWUuOIFFliKD4_4R1oAaMA09OP5y0wVLXBrpGJlVKbKZGXZ-FJpykQ26cp5Jxd7pXFx67S3wy3t6Qz3vlvc5Eby9eJQVtSsfqU_u35eFvnXnWk0UR4Nj_qvD_yem56FzqQ2IV2Txvd1M1K4OvWr=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc8FPcqlEfEGdSbUqhZMhzA2e3_s5F_Boc11y2OynnneilhGdKOnEBeNYHaJwPXd4CrRCwe8mKyGaEYphCU5XzrwXjUsphHBRvc21hq7rORi7NLWyXLnLQBBDCFsKG7HAfwfDYjbJuawtzXvIWxauWa8=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-keaXs2SdmhNXpdifKoKB-djnVz4x0ixPcoi3_ZRx9PBdEp_EiYyw5im-ih8zLf-hKV0AIDyzXosr7UqbFczO0q6hxrwhZPzj4mE60G3_N0H6lLiK7AR-i_DINBFFDgAcbBlPvHPg9mwuV_ZY37XoZ=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-dQsKqxwOgsnfLupPyctKdcnDR9SWLB8jp0rPZzkeP7UPDpK0kzt_3vgsHec8VL2GrENKihFN0enG1oGoFKQT4-wfi4w7n1zmOGsbbDDDsL8vNk3TynHQhcJzj-MHRd0mgPo_H13j96Czm7iuuSIwR=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc9U7Vwj6IkJYYcCbEfXreSI5HiY4-6-xQrwR3QTD5_60ktTCcQ9cYn30OwUQrXgOWD2becTpiE2ETjZ3Co-ksd7eLvgUCR2nk8dcdkW-rpoFb5osOxM5DTVpyWUMtpFzjOC5ShCK3WdZ7sr2LOWxkIw=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc985WIQDRlnGOehAhixLPn9TYwSS9m7lw40SOHu44BGJbpZ7Gjfzo_Yf-ANsZ_Spd192OI8841Y6hntSxN-ARUiBdK6IbsYZWu1QUCmeFJo2Mvb6eTVJ4eYFsVt8AXEn2SWOPtk5pGw37UM7-vDogWU=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-EXBPDE-pLu8jfxL7DKM8AeycFYFQHlxSbWJlV4jY4IJvtGQH_kjx66fU-3JXPrVTqT3zv5sXSj2P_jiWWJwoboCUuUvL0WREGTR1f55GZAadLK2RKfijikJe29kPlqih9-xVpQShYdDPSxGBDD8oV=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc8MpOcC58h0vGSohC9FvUumZX8UlLDCzmUb2ZT5jpkb9EE8IwgIuq-JfrZZMxGBT4Fw2oixNcPac1PvI6hGKRTLiT38mLYo4dKqYChR4C2jPPv2qqM2fpHEYKmptK3DfpbD7uJ8VkOOODUykWCR4VkM=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc92aA9f4WLihY0JeeadpxP3k-iNtx1HbesZnys0k8qxWPtCW_oyKWl4gpp3LdmKrrZ5hAwBuKYkDKcEUn3VMCu7ijJg1DuSkuH7uEeQKFq1sow1WKcp-7pAA0Tksi7dm2rO7PO047-9-PhScYzXKauQ=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc_5zC3QNhe3FTguiYO0ohosGySR9TQzb7o-R1QUxG32CworavEuitmMZQJsed-aDTHYFd-5X9ekBuesPhhvFaho0RP7A4QNosiiMig-s1ikzZilTj6j3qs_VceAMDoWiGY-C-Q7wt10oTd2ehDzl26s=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc-ThYs5M47FUmGqF36WNbpRcO_hSfesCy1iGWN3QMczKWJ4M5TiFLdqvYirYGmkxm-75XhjxOgh5z4vQZ8p0jvdjRjsdPGKpL19FZTtMALsamDkuwjZf6Aw_gxHKXadw6WO3HWnLuZTSMR95WAttb20=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc87i5l-oqALq4b-P-PwwiSh4wauvsIJbeii8ZVM5a3AY3nGl4_4DXPaKUV3OsDHXP_-sjNzr_SlX_iU7jd9ftI7ef3fj22JlwORAetiM2KJUMIPPsW_JsTzkP8YxGxWxGW5FcvRMLfoCUwzwV2bcrIn=w923-h692-s-no?authuser=0",
  "https://lh3.googleusercontent.com/pw/AIL4fc_raB-3TCFasgRVQBAmqikigNW4ew9xIAkjGlCJB4T7a43NTxSCVm8Vyq78edh9AmCyXYaC1hXfO7YB29JjR4K8wwHOKT-0zoU7wXGxl62rYljC8IkktGdM9N9u3epKAUUvJbsd7AA75rvAnaamchyf=w923-h692-s-no?authuser=0",
];


function Gallery() {
  return (
    <div>
      <div className='backgroundImage'/>
      <NavBar/>
      <div className="body">
            <div className='content_gallery'>
                GALLERY <br/><br/>
                <div className="gallery">
                  {images.map((image, index) => (
                    <img
                      key={index}
                      className="gallery_item"
                      src={image}
                    />
                    ))}
                </div>
            </div>
		  </div>
    </div>
  );
}

export default Gallery;
