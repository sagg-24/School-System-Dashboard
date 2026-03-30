function Student({ name, grade, rank, score, img }) {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="flex items-center gap-3">
        <div className={`w-9 h-9 bg-[url(${img})] bg-cover`} />
        <div>
          <p className="text-[13px] font-bold">{name}</p>
          <span className="text-[12px] text-[#71717a]">{grade}</span>
        </div>
      </div>

      <div className="text-right">
        <p className="text-[14px] font-bold">{rank}</p>
        <span className="text-[12px] text-green-500">{score}</span>
      </div>
    </div>
  );
}

export default function TopStudents() {
  return (
    <div className="w-[384px] h-[421px] bg-white rounded-[10px] border absolute top-[540px] left-[1062px] p-5">
      
      <h2 className="text-[16px] font-bold">Top Students</h2>

      <Student 
        name="Sahra Jamac Abdi"
        grade="Grade F11"
        rank="1st"
        score="99.99%"
        img src="/st-1.png" alt="Student" 
      />

      <Student 
        name="Abdi Maajid Hassan"
        grade="Grade F12"
        rank="2nd"
        score="99.76%"
        img src="/st-2.png" alt="Student" 
      />

      <Student 
        name="Sadiya Ahmed Hussein "
        grade="Class Grade 8"
        rank="3rd"
        score="99.50%"
        img src="/st-3.png" alt="Student" 
      />

      <Student 
        name="Abdi haliim Ciise Raage "
        grade="Class Grade 6(B)"
        rank="4th"
        score="98.12%"
        img src="/st-4.png" alt="Student" 
      />
    </div>
  );
}