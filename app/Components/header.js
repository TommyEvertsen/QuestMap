export default function Header() {
  return (
    <div className="headerWrapper">
      <div
        className="header flex justify-between items-center h-10"
        style={{ backgroundColor: "var(--forestGreen)" }}
      >
        <p className="font-bold px-2" style={{ color: "var(--treasureGold)" }}>
          Quest map
        </p>
      </div>
    </div>
  );
}
