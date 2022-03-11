import n1 from "../images/rocket.jpg";
import n2 from "../images/n2.jpg";


function NewsBox(props){
    return(
<section class="recentNews">
  <div class="container">
    <h2 class="news-title">Recent News</h2>
    <div class="row">
      <div class="ct-blog col-sm-6 col-md-4">
        <div class="inner">
          <div class="fauxcrop">
            <a href="#"><img  src={n1}/></a>
          </div>
          <div class="ct-blog-content">
            <div class="ct-blog-date">
              <span>March</span><strong>10</strong>
            </div>
            <h3 class="ct-blog-header">
            Първо изстрелване на мегаракетата на НАСА към Луната
            </h3>
          </div>
        </div>
      </div>
      <div class="ct-blog col-sm-6 col-md-4">
        <div class="inner">
          <div class="fauxcrop">
            <a href="#"><img alt="News Entry" src={n2}/></a>
          </div>
          <div class="ct-blog-content">
            <div class="ct-blog-date">
              <span>March</span><strong>10</strong>
            </div>
            <h3 class="ct-blog-header">
            НАСА ще излъчи разходки в космоса за модернизиране на космическата станция
            </h3>
          </div>
        </div>
      </div>
      <div class="ct-blog col-sm-6 col-md-4">
        <div class="inner">
          <div class="fauxcrop">
            <a href="#"><img src="https://www.solodev.com/assets/recent-news/news-entry-3.jpg"/></a>
          </div>
          <div class="ct-blog-content">
            <div class="ct-blog-date">
              <span>February</span><strong>25</strong>
            </div>
            <h3 class="ct-blog-header">
              7 Crtical Factors when Choosing a CMS
            </h3>
          </div>
        </div>
      </div>
      <div class="ct-blog col-sm-6 col-md-4">
        <div class="inner">
          <div class="fauxcrop">
            <a href="#"><i alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-4.jpg"/></a>
          </div>
          <div class="ct-blog-content">
            <div class="ct-blog-date">
              <span>February</span><strong>23</strong>
            </div>
            <h3 class="ct-blog-header">
              The Best Ways to Leverage Data and Deliver on Your Investment
            </h3>
          </div>
        </div>
      </div>
      <div class="ct-blog col-sm-6 col-md-4">
        <div class="inner">
          <div class="fauxcrop">
            <a href="#"><i alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-5.jpg"/></a>
          </div>
          <div class="ct-blog-content">
            <div class="ct-blog-date">
              <span>February</span><strong>20</strong>
            </div>
            <h3 class="ct-blog-header">
              Latest API Integrations Available through CMS 8
            </h3>
          </div>
        </div>
      </div>
      <div class="ct-blog col-sm-6 col-md-4">
        <div class="inner">
          <div class="fauxcrop">
            <a href="#"><i alt="News Entry" src="https://www.solodev.com/assets/recent-news/news-entry-6.jpg"/></a>
          </div>
          <div class="ct-blog-content">
            <div class="ct-blog-date">
              <span>February</span><strong>16</strong>
            </div>
            <h3 class="ct-blog-header">
              WebCorpCo's Latest Release (CMS 8) Available Today
            </h3>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</section>
    );
}
export default NewsBox;