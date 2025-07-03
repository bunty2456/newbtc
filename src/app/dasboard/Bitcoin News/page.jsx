"use client";

export default function BitcoinNewsPage() {
  const bitcoinArticles = [
    {
      title: "Bitcoin Hits $70K Amid Market Rally",
      date: "July 2, 2025",
      summary: "Bitcoin surged past $70,000 as institutional demand continues to grow.",
    },
    {
      title: "MicroStrategy Acquires Additional BTC",
      date: "July 1, 2025",
      summary: "The company announced another BTC buy, increasing its total holdings by 12,000 BTC.",
    },
    {
      title: "Bitcoin Halving 2024: What We Learned",
      date: "June 30, 2025",
      summary: "Analysts look back at the 2024 halving and its impact on current price trends.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Bitcoin News (BTC)</h1>
      <div className="space-y-6">
        {bitcoinArticles.map((article, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <p className="text-gray-700">{article.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
