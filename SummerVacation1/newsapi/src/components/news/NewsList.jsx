import React, { useState } from "react";
import * as S from "./NewsList.Styled";
import NewsItem from "./NewsItem";
import { useRecoilValue } from "recoil";
import { loadingState, articlesState } from "../../recoil/atoms/atom";

const NewsList = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const loading = useRecoilValue(loadingState);
  const articles = useRecoilValue(articlesState);

  const filteredArticles =
    selectedCategory === "all"
      ? articles
      : articles.filter((article) =>
          article.category ? article.category === selectedCategory : false
        );

  if (loading) return <div>Loading...</div>;

  const categories = [
    { name: "all", text: "전체보기" },
    { name: "business", text: "비즈니스" },
    { name: "entertainment", text: "엔터테인먼트" },
    { name: "health", text: "건강" },
    { name: "science", text: "과학" },
    { name: "sports", text: "스포츠" },
    { name: "technology", text: "기술" },
  ];

  return (
    <>
      <S.Header>
        {categories.map((category) => (
          <S.Category
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            selected={selectedCategory === category.name}
          >
            {category.text}
          </S.Category>
        ))}
      </S.Header>
      <S.NewsListBlock>
        {filteredArticles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))}
      </S.NewsListBlock>
    </>
  );
};

export default NewsList;
