import React from 'react'

export default function About(props) {
  return (
    <>
    <div className=" container accordion my-3 " id="accordionExample">
    <h2 class={`text-${props.mode==='dark'?'light':'dark'}`}>About Us</h2>
        <div className={`accordion-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>
            <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This application is to Analyze your text.</strong> A text conversion app that can convert text to upper case,
                 lower case, clear or remove spaces is a simple but useful tool for text formatting and editing.
                 <p>Convert to upper case: This option converts all the characters in the text to capital letters. 
                    This can be useful for creating headings, titles, or emphasizing certain words.</p>
                 <p>Convert to lower case: This option converts all the characters in the text to lower case letters. 
                    This can be useful for making text easier to read or for correcting inconsistent capitalization.</p>
                 <p>Clear: This option removes all the text from the input field. This can be useful when starting with a new text, 
                    or when wanting to clear a large section of text for editing.</p>
            </div>
            </div>
        </div>
        <div className={`accordion-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>
            <h2 className="accordion-header" id="headingTwo">
            <button className={`accordion-button bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This app is Free to use.</strong> A free-to-use app is a software application that is available to users without any cost or subscription fees. These apps can be downloaded and used by anyone who
                 has access to the internet and a compatible device, without having to pay anything for the app itself.</div>
            </div>
        </div>
        <div className={`accordion-item bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`}>
            <h2 className="accordion-header" id="headingThree">
            <button className={`accordion-button bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser compatiable
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>A browser compatible app</strong> is a software application that is designed to work seamlessly with different web browsers. This means that the app should function the 
                same way across different browsers, such as Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, and others.</div>
            </div>
        </div>
    </div>
</>
  )
}
