import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./Notes.css";
import { useNavigate } from "react-router";

export default function EditNotes() {
  const [text, setText] =
    useState(`<div id="Content" style="margin: 0px; padding: 0px; position: relative; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
  <div id="Panes" style="margin: 15px 0px 0px; padding: 0px;">
      <div style="margin: 0px 14.3984px 0px 28.7969px; padding: 0px; width: 436.797px; text-align: left; float: left;">
          <div id="Inner" style="margin: 0px auto; padding: 0px; width: 960px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: center; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;">
              <div id="Content" style="margin: 0px; padding: 0px; position: relative;">
                  <hr style="margin: 0px; padding: 0px; clear: both; border: 0px; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">
                  <div class="boxed" style="margin: 10px 28.7969px; padding: 0px; clear: both;"><strong style="margin: 0px; padding: 0px;">Donate:</strong><span>&nbsp;</span>If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click<span>&nbsp;</span><a target="_blank" href="https://www.lipsum.com/donate" class="lnk" style="margin: 0px; padding: 0px; color: rgb(221, 0, 0); font-weight: 700;">here</a><span>&nbsp;</span>to donate using PayPal. Thank you for your support.</div>
                  <div class="boxed" style="margin: 10px 28.7969px; padding: 0px; clear: both;"><strong style="margin: 0px; padding: 0px;">Donate Bitcoin:</strong><span>&nbsp;</span>16UQLq1HZ3CNwhvgrarV6pMoA2CDjb4tyF</div>
                  <hr style="margin: 0px; padding: 0px; clear: both; border: 0px; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">
                  <div class="boxed" id="Packages" style="margin: 10px 28.7969px; padding: 0px; clear: both;"><a target="_blank" rel="noopener" href="https://github.com/traviskaufman/node-lipsum" style="margin: 0px 5px; padding: 0px; color: rgb(0, 0, 0);">NodeJS</a><span>&nbsp;</span><a target="_blank" rel="noopener" href="http://code.google.com/p/pypsum/" style="margin: 0px 5px; padding: 0px; color: rgb(0, 0, 0);">Python Interface</a><span>&nbsp;</span><a target="_blank" rel="noopener" href="http://gtklipsum.sourceforge.net/" style="margin: 0px 5px; padding: 0px; color: rgb(0, 0, 0);">GTK Lipsum</a><span>&nbsp;</span><a target="_blank" rel="noopener" href="http://github.com/gsavage/lorem_ipsum/tree/master" style="margin: 0px 5px; padding: 0px; color: rgb(0, 0, 0);">Rails</a><span>&nbsp;</span><a target="_blank" rel="noopener" href="https://github.com/cerkit/LoremIpsum/" style="margin: 0px 5px; padding: 0px; color: rgb(0, 0, 0);">.NET</a><span>&nbsp;</span><a target="_blank" rel="noopener" href="http://groovyconsole.appspot.com/script/64002" style="margin: 0px 5px; padding: 0px; color: rgb(0, 0, 0);">Groovy</a></div>
                  <hr style="margin: 0px; padding: 0px; clear: both; border: 0px; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">
                  <div id="Lipsum-Unit5" style="margin: 10px 0px; padding: 0px;"><br></div>
                  <hr style="margin: 0px; padding: 0px; clear: both; border: 0px; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">
                  <div id="Translation" style="margin: 0px 28.7969px; padding: 0px; text-align: left;">
                      <h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; text-align: left;">The standard Lorem Ipsum passage, used since the 1500s</h3>
                      <p style="margin: 0px 0px 15px; padding: 0px; text-align: justify;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                      <h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; text-align: left;">Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                      <p style="margin: 0px 0px 15px; padding: 0px; text-align: justify;">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                      <h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; text-align: left;">1914 translation by H. Rackham</h3>
                      <p style="margin: 0px 0px 15px; padding: 0px; text-align: justify;">"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                      <h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; text-align: left;">Section 1.10.33 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC</h3>
                      <p style="margin: 0px 0px 15px; padding: 0px; text-align: justify;">"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                      <h3 style="margin: 15px 0px; padding: 0px; font-weight: 700; font-size: 14px; text-align: left;">1914 translation by H. Rackham</h3>
                      <p style="margin: 0px 0px 15px; padding: 0px; text-align: justify;">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
                  </div>
              </div>
              <hr style="margin: 0px; padding: 0px; clear: both; border: 0px; height: 1px; background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));">
              <div class="boxed" style="margin: 10px 28.7969px; padding: 0px; clear: both;"><a href="mailto:help@lipsum.com" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0); text-decoration: none;">help@lipsum.com</a><br style="margin: 0px; padding: 0px;"><a target="_blank" href="https://www.lipsum.com/privacy.pdf" style="margin: 0px; padding: 0px; color: rgb(0, 0, 0); text-decoration: none;">Privacy Policy</a></div>
          </div><br class="Apple-interchange-newline"><br>
          <p><br></p>
      </div><br>
  </div>
</div>`);
  const editor = useRef(null);
  const navigate = useNavigate();
  return (
    <div className="edit-notes">
      <div className="go-back-btn btn btn-primary" onClick={() => navigate(-1)}>
        <img src="/assets/icons/arrow-left-black.svg" alt="" />
        Go back
      </div>
      <div className="editor-container">
        <JoditEditor
          ref={editor}
          value={text}
          onChange={(newText) => {
            setText(newText);
          }}
        />
      </div>
      {/* <p dangerouslySetInnerHTML={{ __html: text }}></p> */}
    </div>
  );
}
