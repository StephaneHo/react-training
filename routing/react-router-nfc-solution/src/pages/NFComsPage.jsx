import { Link } from "react-router-dom";

const nfcs = ["1", "2", "3"];

export const NFComsPage = () => {
  return (
    <div className="mx-20">
      <div className="text-3xl text-violet-700">NFComs</div>
      <ul>
        {nfcs.map((nfc) => (
          <li key={nfc} className="text-xl">
            <Link to={nfc}>{nfc}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
