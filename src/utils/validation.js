// 유효성 검사
    export const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) return { valid: false, message: "이메일을 입력해주세요." };
        if (!regex.test(email)) return { valid: false, message: "유효하지 않은 이메일 형식입니다." };
        return { valid: true, message: "올바른 이메일 형식입니다." };
    };
    
    export const validatePassword = (password) => {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    
        if (!password) {
        return { valid: false, message: "비밀번호를 입력해주세요." };
        }
    
        if (!regex.test(password)) {
        return {
            valid: false,
            message: "비밀번호는 영문자, 숫자, 특수문자를 포함해 6자 이상이어야 합니다."
        };
        }
    
        return { valid: true, message: "사용 가능한 비밀번호입니다." };
    };
    
    
    export const validatePasswordConfirm = (password, confirmPassword) => {
        if (!confirmPassword) return { valid: false, message: "비밀번호 확인을 입력해주세요." };
        if (password !== confirmPassword) return { valid: false, message: "비밀번호가 일치하지 않습니다." };
        return { valid: true, message: "비밀번호가 일치합니다." };
    };
    
    export const validateName = (name) => {
        const regex = /^[가-힣a-zA-Z]{2,}$/;
        if (!name) return { valid: false, message: "이름을 입력해주세요." };
        if (!regex.test(name)) return { valid: false, message: "이름은 한글 또는 영문 2자 이상이어야 합니다." };
        return { valid: true, message: "올바른 이름입니다." };
    };
    