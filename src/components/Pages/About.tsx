import Page from './Page';
import { PageTitle, AriaTitle } from '../Title';
import HomeCard from '../Card/HomeCard';

export default function AboutPage() {
    return (
        <Page
            id="about"
            title={<PageTitle>About</PageTitle>}
            content={
                <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-stretch gap-1">
                    <HomeCard
                        ariaTitle={<AriaTitle title="가독성 이미지" />}
                        representativeImage={<img src="" alt="" />}
                        explaination={<p>설명</p>}
                    />
                    <HomeCard
                        ariaTitle={<AriaTitle title="직관성 이미지" />}
                        representativeImage={<img src="" alt="" />}
                        explaination={<p>설명</p>}
                    />
                    <HomeCard
                        ariaTitle={<AriaTitle title="소통 협업 이미지" />}
                        representativeImage={<img src="" alt="" />}
                        explaination={<p>설명</p>}
                    />
                    <HomeCard
                        ariaTitle={<AriaTitle title="해줘 편리성 이미지" />}
                        representativeImage={<img src="" alt="" />}
                        explaination={<p>설명</p>}
                    />
                </div>
            }
        />
    );
}
