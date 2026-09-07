//Fragment(프래그먼트)연습 .box>h3 글자색상변경
//------------------------------------------
const Student = ({student}) => {
    const {id, name, dept} = student;  // 비구조 할당  student.id  student.name
    return (
        <>
            <h3>학번:{id}</h3>
            <h3>이름:{name}</h3>
            <h3>학과:{dept}</h3>
            <br/>
        </> //태그를 사용하지 않고 단순히 묶고 싶을때
    )
}
export default Student