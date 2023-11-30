import { useEffect, useMemo, useState } from "react";
import { GroupOfTasks } from "../constants/interfaces";
import axios from "axios";
import { API_URL } from "../constants/constants";

export function useFetchTasks() {
  const [allFetchedTasks, setFetchedAllTasks] = useState<GroupOfTasks[]>([]);

  const totalPoints = useMemo(() => {
    let total = 0;
    allFetchedTasks.forEach(({ tasks }) => {
      tasks.forEach(({ value }) => {
        total = total + value;
      });
    });
    return total;
  }, [allFetchedTasks]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const responseBody = res.data;
        if (responseBody) {
          setFetchedAllTasks(responseBody);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { allFetchedTasks, totalPoints };
}
