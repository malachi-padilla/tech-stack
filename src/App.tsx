import { useState } from 'react';
import { techStackList } from './lib/static';
import {
	ContentLeft,
	ContentRight,
	ContentWrapper,
	FancyTitle,
	MainParagraph,
	PageWrapper,
	StackWrap,
	TechList,
} from './styles/App-css';

function App() {
	const [infoOpen, setInfoOpen] = useState<number | null>(null);

	return (
		<PageWrapper>
			<ContentWrapper>
				<ContentLeft>
					<FancyTitle>
						Recent <span>Tech</span> I've Been Working With
					</FancyTitle>
					<MainParagraph>It all started with HTML, CSS, and JavaScript.</MainParagraph>
					<TechList info={infoOpen}>
						{techStackList.map((item) => (
							<li
								onClick={() => setInfoOpen(item.stackPosition)}
								onMouseEnter={() => setInfoOpen(item.stackPosition)}
								onMouseLeave={() => setInfoOpen(null)}>
								<h4>{item.technologie}</h4>
								<ul>
									<li>{item.techInfo}</li>
								</ul>
							</li>
						))}
					</TechList>
				</ContentLeft>
				<ContentRight>
					<StackWrap info={infoOpen}>
						{techStackList.map((item) => (
							<div
								onClick={() => setInfoOpen(item.stackPosition)}
								onMouseEnter={() => setInfoOpen(item.stackPosition)}
								onMouseLeave={() => setInfoOpen(null)}></div>
						))}
					</StackWrap>
				</ContentRight>
			</ContentWrapper>
		</PageWrapper>
	);
}

export default App;
