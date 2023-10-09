import React, { useState } from "react";
import image from "./iconeinsta.png";

function Home() {
const [likeContagem, setLikeContagem] = useState(0);

  const atualizarLike = () => {
  setLikeContagem(likeContagem + 1)
  }
  return (
    <div className="boasvindas">
      <fieldset>
        <img src={image} alt="./iconeinsta.png" className="imagem"/>
        <h1 className="h1BemVindo">Bem vindo novamente!</h1>
        <h2 className="h2Like">Se gosta do nosso app, dê like</h2>
        <button onClick={atualizarLike} className="botaoLike">
          ❤️ {likeContagem}
        </button>
      </fieldset>
    </div>
  );
}
export default Home;
// import React, { useState } from "react";

// const LikeButton = () => {
//   const [liked, setLiked] = useState(false);
//   const [likesCount, setLikesCount] = useState(0);

//   const handleLikeClick = () => {
//     if (liked) {
//       setLikesCount(likesCount - 1);
//     } else {
//       setLikesCount(likesCount + 1);
//     }
//     setLiked(!liked);
//   };

//   return (
//     <div>
//       <button onClick={handleLikeClick}>
//         {liked ? "❤️" : "🤍"} {likesCount > 0 && likesCount}
//       </button>
//     </div>
//   );
// };

// export default LikeButton;
