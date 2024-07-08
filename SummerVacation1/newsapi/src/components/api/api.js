import React, { useEffect } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { loadingState, articlesState } from "../../recoil/atoms/atom";

const Api = ({ children }) => {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [articles, setArticles] = useRecoilState(articlesState);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=kr&apiKey=733f5581e8b24303871e1b07fbce2ffc"
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [setLoading, setArticles]);

  return <>{children}</>;
};

export default Api;
