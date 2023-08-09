import SanFrancisco from "./ImgFolder/San-Francisco.jpg"
function AboutCity(){
    return (
        <div>
            <img src={SanFrancisco} alt="San Francisco" width="100%" />
            <div className="container" id="aboutCity">
                <h2 className="header">About the City</h2>
                <p className="par text">San Francisco officially the City and County of San Francisco, is the commercial, financial, and cultural center of Northern California. The city proper is the fourth most populous city in California, with 808,437 residents, and the 17th most populous city in the United States as of 2022, and covers a land area of 46.9 square miles (121 square kilometers), at the end of the San Francisco Peninsula, making it the second most densely populated large U.S. city after New York City. San Francisco holds a secure place in the United States’ romantic dream of itself—a cool, elegant, handsome, worldly seaport whose steep streets offer breathtaking views of one of the world’s greatest bays. According to the dream, San Franciscans are sophisticates whose lives hold full measures of such civilized pleasures as music, art, and good food.</p>
            </div>
        </div>
    )
}
export default AboutCity;