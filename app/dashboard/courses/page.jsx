"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import CourseItem from "@components/CourseItem";

function Profile() {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("/gada");
  useEffect(() => {
    setLoading(true);
    fetch("/api/course")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTitle(data[0]?.title);
        setDesc(data[0]?.desc);
        setId(data[0]?._id);
        setImage(data[0]?.image);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col-reverse sm:flex-row sm:h-screen sm:pl-28 pt-20 pb-12">
      <div className="flex flex-col h-full overflow-y-scroll px-4 pr-4 gap-4 w-full sm:w-7/12">
        <h2 className="text-3xl font-semibold">Courses</h2>
        {isLoading ? <h3>Loading...</h3> : null}
        <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.map((val) => (
            <button
              key={val._id}
              className={`flex flex-1 flex-col justify-between border sm:border-4 shadow-lg hover:bg-blue-100 duration-200 hover:scale-105 rounded-lg p-2 h-24 sm:h-44 border-[#0065C1]`}
              onClick={() => {
                setTitle(val.title);
                setDesc(val.desc);
                setId(val._id);
                setImage(val.image);
              }}
            >
              <div className="flex flex-col">
                <h3 className="text-xs sm:text-sm md:text-lg text-left">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 text-left hidden sm:flex">
                  {val?.data.length} Materials
                </p>
              </div>
              <div className="flex flex-row justify-end w-full">
                <Image
                  src={val?.smallImage}
                  alt="course"
                  height={50}
                  width={50}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="w-full sm:w-5/12 flex gap-4 flex-col px-8">
        <h2 className="text-3xl font-semibold">Courses Detail</h2>
        <div className="rounded-lg border-4 flex items-center justify-center border-blue-300 w-full h-48">
          <Image
            src={image}
            alt="course"
            height={150}
            width={150}
            className=""
          />
        </div>
        <h3>{title}</h3>
        <p className="flex h-32 md:flex-1 border-2 border-slate-400 p-4 rounded-lg overflow-y-scroll">
          {desc}
        </p>
        <div className="flex justify-end ">
          <Link
            href={`/dashboard/courses/${id}`}
            className="greenButton rounded-full text-slate-100 py-2 px-4 duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Profile;

// const asd = {
//   "title": "C++ Dasar",
//   "desc": "Video tutorial yang dirancang khusus untuk memperkenalkan Anda pada dasar-dasar bahasa pemrograman C++. Dalam playlist ini, Anda akan mempelajari konsep dasar seperti apa itu C++, cara kerjanya, dan peran compiler dalam menjalankan program C++. Selain itu, Anda akan belajar tentang deklarasi variabel, tipe data fundamental, operasi aritmatika, serta teknik dasar lainnya yang penting dalam pengembangan program dengan C++. Dengan mengikuti playlist ini, Anda akan memperoleh pemahaman yang kuat tentang C++ dan siap untuk melangkah ke tingkat berikutnya dalam perjalanan belajar pemrograman.",
//   "image":"nanti ku isiin sendiri",
//   "data": [
//     {
//     "title": "Belajar C++ [Dasar] - 01 - Apa itu C++",
//     "desc": "Video tutorial ini akan memperkenalkan Anda pada C++, sebuah bahasa pemrograman yang kuat dan populer. Anda akan mempelajari apa itu C++, sejarahnya, dan mengapa C++ sering digunakan dalam pengembangan perangkat lunak. Tonton video ini untuk memulai perjalanan belajar Anda dalam C++.",
//     "video": "https://www.youtube.com/embed/WtBF_-pLrjE"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 02 - Cara Kerja C++",
//     "desc": "Video tutorial ini akan menjelaskan tentang cara kerja C++ secara umum. Anda akan mempelajari tahapan proses dalam pengembangan program C++, termasuk preprocessing, compiling, dan linking. Pelajari lebih lanjut tentang cara kerja C++ dengan menonton video ini.",
//     "video": "https://www.youtube.com/embed/kxarfCiubWc"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 03 - Memahami Program dan Compiler",
//     "desc": "Video tutorial ini akan membantu Anda memahami dasar-dasar program C++ dan peran compiler dalam menjalankannya. Anda akan mempelajari struktur dasar program C++, sintaksis dasar, dan langkah-langkah untuk menjalankan program menggunakan compiler. Tonton video ini untuk memperdalam pemahaman Anda tentang program dan compiler C++.",
//     "video": "https://www.youtube.com/embed/Wzxknjyd3hE"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 04 - Preprocessing, Compiling, dan Linking",
//     "desc": "Video tutorial ini akan menjelaskan tahapan preprocessing, compiling, dan linking dalam pengembangan program C++. Anda akan mempelajari peran masing-masing tahapan, serta bagaimana file-file sumber diubah menjadi executable yang dapat dijalankan. Pelajari lebih lanjut tentang tahapan pengembangan program C++ dengan menonton video ini.",
//     "video": "https://www.youtube.com/embed/6gfNGzDfn7w"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 05 - Review dan Recap Cara Menjalankan Program C++",
//     "desc": "Video tutorial ini akan mereview dan merekap kembali cara menjalankan program C++. Anda akan melihat langkah-langkah praktis untuk mengompilasi dan menjalankan program C++, serta tips dan trik untuk mengatasi masalah umum yang mungkin Anda temui. Tonton video ini untuk menguatkan pemahaman Anda tentang menjalankan program C++.",
//     "video": "https://www.youtube.com/embed/3d8JbMafZOY"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 06 - Printing pada Console",
//     "desc": "Video tutorial ini akan membahas tentang cara melakukan printing pada console menggunakan bahasa pemrograman C++. Anda akan mempelajari berbagai metode untuk menampilkan teks dan nilai variabel pada layar console. Pelajari lebih lanjut tentang printing pada console dengan C++ melalui video ini.",
//     "video": "https://www.youtube.com/embed/Bt7xPtON9NE"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 07 - Variabel",
//     "desc": "Video tutorial ini akan mengenalkan Anda pada konsep variabel dalam bahasa pemrograman C++. Anda akan mempelajari cara mendeklarasikan variabel, tipe data dasar, dan penggunaan variabel dalam program C++. Tonton video ini untuk memahami lebih lanjut tentang variabel dalam C++.",
//     "video": "https://www.youtube.com/embed/vnYWr7jFl5M"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 08 - Deklarasi dan Cin",
//     "desc": "Video tutorial ini akan membahas tentang deklarasi variabel dan penggunaan fungsi cin untuk mengambil input dari pengguna dalam program C++. Anda akan mempelajari cara mendeklarasikan variabel, mengetahui tipe data yang tepat, dan menggunakan cin untuk mengambil nilai input. Pelajari lebih lanjut tentang deklarasi dan cin dalam C++ melalui video ini.",
//     "video": "https://www.youtube.com/embed/-N-iONms8uw"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 09 - Tipe Data Fundamental",
//     "desc": "Video tutorial ini akan membantu Anda memahami tipe data fundamental dalam bahasa pemrograman C++. Anda akan mempelajari tipe data seperti integer, floating-point, character, dan boolean, serta cara deklarasi dan penggunaannya dalam program C++. Tonton video ini untuk memperdalam pemahaman Anda tentang tipe data fundamental dalam C++.",
//     "video": "https://www.youtube.com/embed/Ei3nBpyTtew"
//     },
//     {
//     "title": "Belajar C++ [Dasar] - 10 - Aritmatika",
//     "desc": "Video tutorial ini akan membahas operasi aritmatika dalam bahasa pemrograman C++. Anda akan mempelajari cara melakukan operasi penjumlahan, pengurangan, perkalian, pembagian, dan modulo pada angka dalam program C++. Pelajari lebih lanjut tentang operasi aritmatika dalam C++ melalui video ini.",
//     "video": "https://www.youtube.com/embed/bxNqTu4N-Is"
//     }
//     ],
//   "__v": { "$numberInt": "2" }
// }
