const paletteItems = [
  {
    category: '構造',
    items: ['壁', 'ドア', '窓']
  },
  {
    category: '設備',
    items: ['キッチン', '浴槽', '洗面台', 'トイレ']
  },
  {
    category: '注釈',
    items: ['部屋ラベル', '寸法ライン']
  }
];

const properties = [
  { label: '幅', value: '1200mm' },
  { label: '高さ', value: '600mm' },
  { label: '角度', value: '0°' },
  { label: '線幅', value: '2px' }
];

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div>
          <h1>住宅平面図エディタ</h1>
          <p>Canvasベースのプロトタイプ（React）</p>
        </div>
        <div className="app__actions">
          <button type="button" className="primary">保存（JSON）</button>
          <button type="button">読み込み</button>
          <button type="button">やり直し</button>
        </div>
      </header>
      <div className="app__body">
        <aside className="panel">
          <h2>パーツ</h2>
          {paletteItems.map((section) => (
            <div className="panel__section" key={section.category}>
              <h3>{section.category}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>
                    <button type="button" className="ghost">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
        <main className="canvas">
          <div className="canvas__toolbar">
            <span>グリッド: 50mm</span>
            <span>スナップ: ON</span>
          </div>
          <div className="canvas__surface">
            <canvas width="900" height="560" aria-label="平面図キャンバス" />
            <div className="canvas__hint">
              ここにパーツをドラッグして配置します
            </div>
          </div>
        </main>
        <aside className="panel panel--right">
          <h2>プロパティ</h2>
          <div className="panel__section">
            <h3>選択中: キッチン</h3>
            <div className="property-grid">
              {properties.map((property) => (
                <div key={property.label} className="property-row">
                  <span>{property.label}</span>
                  <strong>{property.value}</strong>
                </div>
              ))}
            </div>
          </div>
          <div className="panel__section">
            <h3>スナップ設定</h3>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span>グリッドに吸着</span>
            </label>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span>ガイドライン表示</span>
            </label>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default App;
