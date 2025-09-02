import React from "react";

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                🎉 Tuyệt vời! Bạn đã hoàn thành {completedTasksCount} việc
                {activeTasksCount > 0 &&
                  `, còn ${activeTasksCount} việc nữa thôi. Cố lên!`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>Hãy bắt đầu làm {activeTasksCount} nhiệm vụ nào!</>
            )}
          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
