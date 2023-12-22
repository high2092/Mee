import { taskModalStyle, titleInputStyle, labelStyle, textAreaStyle, timeInputStyle, timeInputSectionStyle, submitButtonStyle } from './TaskModal.css';
import { CenteredModal, PreparedModalProps } from './Modal';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { convertDate } from '../../../utility/date';
import { useModal } from '../../../hooks/useModal';
import { useRecoilValue } from 'recoil';
import { dateAtom } from '../../../state/date';

export function TaskModal({ zIndex }: PreparedModalProps) {
  const date = useRecoilValue(dateAtom);
  const { closeModal } = useModal();
  const { register, handleSubmit: onSubmit } = useForm<TaskDto>({ mode: 'onSubmit', defaultValues: { date: convertDate(date) } });

  const handleSubmit = useCallback((data: TaskDto) => {
    httpPostTask(data).then(closeModal);
  }, []);

  return (
    <CenteredModal zIndex={zIndex}>
      <div className={taskModalStyle}>
        <form onSubmit={onSubmit(handleSubmit)}>
          <label>
            <span className={labelStyle}>태스크 제목</span>
            <input className={titleInputStyle} {...register('title')} />
          </label>

          <div className={timeInputSectionStyle}>
            <label>
              <span className={labelStyle}>시작 시각</span>
              <input className={timeInputStyle} {...register('startedAt')} />
            </label>

            <label>
              <span className={labelStyle}>종료 시각</span>
              <input className={timeInputStyle} {...register('endedAt')} />
            </label>
          </div>

          <label>
            <span className={labelStyle}>태스크 설명</span>
            <textarea className={textAreaStyle} {...register('description')} />
          </label>

          <button className={submitButtonStyle}>추가</button>
        </form>
      </div>
    </CenteredModal>
  );
}

async function httpPostTask(task: TaskDto) {
  const response = await fetch('/api/task', {
    method: 'POST',
    body: JSON.stringify(task),
  });

  if (response.status !== 200) {
    throw new Error();
  }
}
