import React from "react";
import { LangContext } from "../context/LangContext";
import { useContext } from "react";

export const AboutMe = () => {
  const { lang } = useContext(LangContext);

  const englishContent = (
    <p className="pixel text-2xl">
      Hello, I'm Alejandro Vidal Casado, a Junior Fullstack Developer with a
      special focus on JavaScript.
      <br />
      <br /> I've worked on projects using technologies like React.js for the
      frontend and Node.js for the backend.
      <br /> My experience includes crafting functional and appealing web
      applications.
      <br />
      <br /> My commitment to continuous learning drives me to take on new
      challenges and consistently improve my skills.
      <br />
      <br /> In addition to JavaScript, I have knowledge in PHP and other
      frameworks that broaden my skill set, allowing me to easily adapt to
      different technologies.
      <br />
      <br /> I'm excited about the opportunity to contribute and learn in a
      professional environment, and I'm ready to be part of your team!
      <br />
      <br />
      Alejandro Vidal Casado,
      <br /> Junior Fullstack Developer.
    </p>
  );

  const japaneseContent = (
    <p className="pixel text-[1.3rem]">
      JavaScriptに特化したジュニアフルスタックデベロッパーのAlejandro Vidal
      Casadoです。
      <br /> <br />
      フロントエンドにReact.js、バックエンドにNode.jsといった技術を使ったプロジェクトに携わってきました。
      <br />
      私の経験には、機能的で魅力的なウェブアプリケーションの作成が含まれます。
      <br />
      <br />
      私の継続的な学習へのコミットメントは、新しい課題に挑戦し、常に自分のスキルを向上させる原動力となっています。
      <br />
      <br />
      JavaScriptだけでなく、PHPやその他のフレームワークの知識もあり、スキルの幅を広げることで、異なる技術にも容易に適応できるようになりました。
      <br />
      <br />
      プロフェッショナルな環境で貢献し、学ぶ機会にワクワクしています！
      <br />
      <br />
      アレハンドロ・ビダル・カサド <br />
      ジュニア・フルスタック・デベロッパー。
    </p>
  );

  return (
    <div className="h-screen relative section snap-center grid grid-cols-2 place-items-center text-light">
      <div></div>
      <div className="w-[400px]">
        {lang.code === "ja" ? japaneseContent : englishContent}
      </div>
    </div>
  );
};
