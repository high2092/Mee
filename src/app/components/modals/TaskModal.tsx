import { taskModalStyle, titleInputStyle, labelStyle, textAreaStyle, timeInputStyle, timeInputSectionStyle, submitButtonStyle } from './TaskModal.css';
import { CenteredModal, PreparedModalProps } from './Modal';

export function TaskModal({ zIndex }: PreparedModalProps) {
  return (
    <CenteredModal zIndex={zIndex}>
      <div className={taskModalStyle}>
        <form>
          <label>
            <span className={labelStyle}>태스크 제목</span>
            <input className={titleInputStyle} />
          </label>

          <div className={timeInputSectionStyle}>
            <label>
              <span className={labelStyle}>시작 시각</span>
              <input className={timeInputStyle} />
            </label>

            <label>
              <span className={labelStyle}>종료 시각</span>
              <input className={timeInputStyle} />
            </label>
          </div>

          <label>
            <span className={labelStyle}>태스크 설명</span>
            <textarea className={textAreaStyle} />
          </label>

          <button
            className={submitButtonStyle}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            추가
          </button>
        </form>
      </div>
    </CenteredModal>
  );
}
