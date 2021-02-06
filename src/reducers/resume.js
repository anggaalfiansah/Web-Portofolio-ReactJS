const dataResume = {
    education: [{ jurusan: "Computer and Network Engineering", sekolah: "SMK At-Thoat Toroh", tahun: "2015-2018" }],
    work: [
        { perusahaan: "PT WISESA SUDI KARYA", jabatan: "IT technician", lama: "2018-2019" },
        { perusahaan: "PT BAHTERA PINTAS UTAMA", jabatan: "IT technician", lama: "2019-2020" }
    ],
    testimoni: [
        { nama: "Stubbs", pendapat: "miong miong, meong miung miong. miung miung, meeeong miung.", perusahaan: "Oren Tbk.", foto: "http://anggaalfiansah.com/foto_stock/STUBBS.jpg" },
        { nama: "Wotjeck", pendapat: "Roarr, rrrrr arrrrrr. roarrr, rrrrr arrrrrrrrrrrr roarrrrgggg.", perusahaan: "Amunation Tbk.", foto: "http://anggaalfiansah.com/foto_stock/Corporal%20Wotjek.jpg" },
        { nama: "Alika", pendapat: "wough, guk guk. wough wough guk, auuuuuuuuuu.", perusahaan: "Space Defense Tbk,.", foto: "http://anggaalfiansah.com/foto_stock/Alika.jpg" },
    ],
    quotes: "Tertawa adalah tanda bahagia, tapi akan lebih bahagia jika anda bisa membuat orang lain tertawa..",
    quotesmaker: "Einstein"
}

export const resume = (state = dataResume, action) => {
    return state
}