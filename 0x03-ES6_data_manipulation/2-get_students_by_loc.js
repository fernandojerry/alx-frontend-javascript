export default function getStudentByLocation(studeents, city) {
    return studeents.filter((obj) => obj.location === city);
}