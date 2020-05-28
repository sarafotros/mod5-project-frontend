import React from "react"
import ContentLoader from "react-content-loader" 

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={490}
    height={178}
    viewBox="0 0 490 178"
    backgroundColor="#bedbf4"
    foregroundColor="#bdc0c2"
    {...props}
  >
    <rect x="8" y="67" rx="3" ry="3" width="381" height="9" /> 
    <rect x="9" y="82" rx="3" ry="3" width="380" height="9" /> 
    <circle cx="29" cy="31" r="27" /> 
    <rect x="64" y="6" rx="10" ry="10" width="324" height="51" />
  </ContentLoader>
)

export default MyLoader
